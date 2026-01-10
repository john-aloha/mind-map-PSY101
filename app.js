// PSY101 Mind Map - Application Logic
class PSY101MindMap {
    constructor() {
        this.data = PSY101_DATA;
        this.studiedTopics = this.loadStudiedTopics();
        this.completedQuizzes = this.loadCompletedQuizzes();
        this.expandedTopics = new Set();
        this.totalQuizItems = this.calculateTotalQuizItems();
        this.currentQuizId = null;
        this.currentCorrectAnswer = null;

        this.init();
    }

    init() {
        this.cacheElements();
        this.renderTopics();
        this.bindEvents();
        this.updateProgress();
        this.loadTheme();
    }

    cacheElements() {
        this.branchesContainer = document.getElementById('branchesContainer');
        this.detailPanel = document.getElementById('detailPanel');
        this.detailContent = document.getElementById('detailContent');
        this.detailClose = document.getElementById('detailClose');
        this.searchInput = document.getElementById('searchInput');
        this.expandAllBtn = document.getElementById('expandAll');
        this.collapseAllBtn = document.getElementById('collapseAll');
        this.toggleThemeBtn = document.getElementById('toggleTheme');
        this.progressFill = document.getElementById('progressFill');
        this.progressValue = document.getElementById('progressValue');
        this.progressContainer = document.querySelector('.progress-container');
        // Tooltip elements
        this.termTooltip = document.getElementById('termTooltip');
        this.termTooltipTitle = document.getElementById('termTooltipTitle');
        this.termTooltipDefinition = document.getElementById('termTooltipDefinition');
        this.termTooltipClose = document.getElementById('termTooltipClose');
        this.tooltipOverlay = document.getElementById('tooltipOverlay');
        // Quiz elements
        this.quizModal = document.getElementById('quizModal');
        this.quizOverlay = document.getElementById('quizOverlay');
        this.quizClose = document.getElementById('quizClose');
        this.quizQuestion = document.getElementById('quizQuestion');
        this.quizOptions = document.getElementById('quizOptions');
        this.quizResult = document.getElementById('quizResult');
        this.resetProgressBtn = document.getElementById('resetProgress');
    }

    renderTopics() {
        this.branchesContainer.innerHTML = '';

        this.data.topics.forEach((topic, index) => {
            const topicElement = this.createTopicElement(topic, index);
            this.branchesContainer.appendChild(topicElement);
        });
    }

    createTopicElement(topic, index) {
        const branch = document.createElement('div');
        branch.className = 'topic-branch';
        branch.dataset.topic = topic.id;
        branch.dataset.index = index;

        if (this.isTopicStudied(topic.id)) {
            branch.classList.add('studied');
        }

        if (this.expandedTopics.has(topic.id)) {
            branch.classList.add('expanded');
        }

        branch.innerHTML = `
            <div class="topic-header" data-topic-id="${topic.id}">
                <div class="topic-title-row">
                    <div class="topic-icon">${topic.icon}</div>
                    <h3 class="topic-title">${topic.title}</h3>
                </div>
                <p class="topic-subtitle">${topic.subtitle}</p>
                <span class="topic-expand">+</span>
            </div>
            <div class="topic-content">
                <div class="subtopics-list">
                    ${topic.subtopics.map(sub => `
                        <div class="subtopic-item" data-subtopic-id="${sub.id}" data-parent-id="${topic.id}">
                            <div class="subtopic-bullet"></div>
                            <span class="subtopic-text">${sub.title}</span>
                            <span class="subtopic-arrow">→</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        return branch;
    }

    bindEvents() {
        // Topic header click - expand/collapse
        this.branchesContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.topic-header');
            if (header) {
                this.toggleTopic(header.dataset.topicId);
            }
        });

        // Subtopic click - show details
        this.branchesContainer.addEventListener('click', (e) => {
            const subtopic = e.target.closest('.subtopic-item');
            if (subtopic) {
                e.stopPropagation();
                this.showSubtopicDetails(subtopic.dataset.parentId, subtopic.dataset.subtopicId);
            }
        });

        // Double-click to mark as studied
        this.branchesContainer.addEventListener('dblclick', (e) => {
            const branch = e.target.closest('.topic-branch');
            if (branch) {
                this.toggleStudied(branch.dataset.topic);
            }
        });

        // Close detail panel
        this.detailClose.addEventListener('click', () => this.closeDetailPanel());

        // Close panel on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeTermTooltip();
                this.closeDetailPanel();
            }
            // Ctrl+K for search
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.searchInput.focus();
            }
        });

        // Search functionality
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Expand/Collapse all
        this.expandAllBtn.addEventListener('click', () => this.expandAll());
        this.collapseAllBtn.addEventListener('click', () => this.collapseAll());

        // Theme toggle
        this.toggleThemeBtn.addEventListener('click', () => this.toggleTheme());

        // Click outside to close detail panel (but not when tooltip or quiz is open)
        document.addEventListener('click', (e) => {
            // Don't close detail panel if tooltip is open or if clicking tooltip elements
            if (this.termTooltip.classList.contains('active') ||
                e.target.closest('.term-tooltip') ||
                e.target.closest('.tooltip-overlay')) {
                return;
            }

            // Don't close detail panel if quiz modal is open or if clicking quiz elements
            if (this.quizModal.classList.contains('active') ||
                e.target.closest('.quiz-modal') ||
                e.target.closest('.quiz-overlay')) {
                return;
            }

            if (this.detailPanel.classList.contains('open') &&
                !this.detailPanel.contains(e.target) &&
                !e.target.closest('.subtopic-item')) {
                this.closeDetailPanel();
            }
        });

        // Key term click handler (using event delegation on detail panel)
        this.detailPanel.addEventListener('click', (e) => {
            const keyTerm = e.target.closest('.key-term');
            if (keyTerm) {
                e.stopPropagation();
                const term = keyTerm.dataset.term;
                this.showTermDefinition(term);
            }
        });

        // Close tooltip handlers (with stopPropagation to prevent closing detail panel)
        this.termTooltipClose.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeTermTooltip();
        });
        this.tooltipOverlay.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeTermTooltip();
        });

        // Quiz button click handler
        this.detailPanel.addEventListener('click', (e) => {
            const quizBtn = e.target.closest('.quiz-btn');
            if (quizBtn) {
                e.stopPropagation();
                const quizId = quizBtn.dataset.quizId;

                // If already completed, allow user to reset this specific item
                if (quizBtn.classList.contains('completed')) {
                    this.resetSingleQuiz(quizBtn, quizId);
                    return;
                }

                // Otherwise, start the quiz
                const quizType = quizBtn.dataset.quizType;
                if (quizType === 'keypoint') {
                    const content = quizBtn.dataset.content;
                    this.openKeypointQuiz(quizId, content);
                } else if (quizType === 'term') {
                    const term = quizBtn.dataset.term;
                    this.openTermQuiz(quizId, term);
                }
            }
        });

        // Quiz modal close handlers
        this.quizClose.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeQuizModal();
        });
        this.quizOverlay.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeQuizModal();
        });

        // Quiz option click handler
        this.quizOptions.addEventListener('click', (e) => {
            e.stopPropagation();
            const option = e.target.closest('.quiz-option');
            if (option && !option.disabled) {
                this.handleQuizAnswer(option);
            }
        });

        // Reset progress button
        this.resetProgressBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all your quiz progress? This cannot be undone.')) {
                this.resetProgress();
            }
        });
    }

    toggleTopic(topicId) {
        const branch = document.querySelector(`[data-topic="${topicId}"]`);
        if (!branch) return;

        if (this.expandedTopics.has(topicId)) {
            this.expandedTopics.delete(topicId);
            branch.classList.remove('expanded');
        } else {
            this.expandedTopics.add(topicId);
            branch.classList.add('expanded');
        }
    }

    expandAll() {
        this.data.topics.forEach(topic => {
            this.expandedTopics.add(topic.id);
            const branch = document.querySelector(`[data-topic="${topic.id}"]`);
            if (branch) branch.classList.add('expanded');
        });
    }

    collapseAll() {
        this.expandedTopics.clear();
        document.querySelectorAll('.topic-branch').forEach(branch => {
            branch.classList.remove('expanded');
        });
    }

    showSubtopicDetails(parentId, subtopicId) {
        const parent = this.data.topics.find(t => t.id === parentId);
        const subtopic = parent?.subtopics.find(s => s.id === subtopicId);

        if (!subtopic) return;

        this.detailContent.innerHTML = `
            <div class="detail-header">
                <div class="detail-icon">${parent.icon}</div>
                <h2 class="detail-title">${subtopic.title}</h2>
                <p class="detail-breadcrumb">${parent.title}</p>
            </div>
            
            <div class="detail-section">
                <h3 class="detail-section-title">Overview</h3>
                <p class="detail-description">${subtopic.description}</p>
            </div>
            
            <div class="detail-section">
                <h3 class="detail-section-title">Key Points <span style="font-size: 0.65rem; font-weight: 400; opacity: 0.7;">(🧠 = quiz)</span></h3>
                <ul class="detail-list">
                    ${subtopic.keyPoints.map((point, idx) => {
            const quizId = `kp_${subtopicId}_${idx}`;
            const isCompleted = this.completedQuizzes.has(quizId);
            return `<li>
                            <div class="key-point-wrapper">
                                <span class="key-point-text">${point}</span>
                                <button class="quiz-btn ${isCompleted ? 'completed' : ''}" 
                                    data-quiz-type="keypoint" 
                                    data-quiz-id="${quizId}"
                                    data-content="${this.escapeHtml(point)}"
                                    title="${isCompleted ? 'Completed!' : 'Test yourself'}">
                                    ${isCompleted ? '' : '🧠'}
                                </button>
                            </div>
                        </li>`;
        }).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3 class="detail-section-title">Key Terms <span style="font-size: 0.65rem; font-weight: 400; opacity: 0.7;">(click term for definition, 🧠 = quiz)</span></h3>
                <div class="key-terms">
                    ${subtopic.keyTerms.map(term => {
            const quizId = `kt_${term.replace(/\s+/g, '_')}`;
            const isCompleted = this.completedQuizzes.has(quizId);
            return `<span class="key-term-wrapper">
                            <span class="key-term" data-term="${term}">${term}</span>
                            <button class="quiz-btn key-term-quiz-btn ${isCompleted ? 'completed' : ''}" 
                                data-quiz-type="term" 
                                data-quiz-id="${quizId}"
                                data-term="${term}"
                                title="${isCompleted ? 'Completed!' : 'Test yourself'}">
                                ${isCompleted ? '' : '🧠'}
                            </button>
                        </span>`;
        }).join('')}
                </div>
            </div>
        `;

        this.detailPanel.classList.add('open');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    closeDetailPanel() {
        this.detailPanel.classList.remove('open');
    }

    showTermDefinition(term) {
        const definition = TERM_DEFINITIONS[term];

        if (definition) {
            this.termTooltipTitle.textContent = term;
            this.termTooltipDefinition.textContent = definition;
        } else {
            this.termTooltipTitle.textContent = term;
            this.termTooltipDefinition.textContent = "Definition not available for this term.";
        }

        this.termTooltip.classList.add('active');
        this.tooltipOverlay.classList.add('active');
    }

    closeTermTooltip() {
        this.termTooltip.classList.remove('active');
        this.tooltipOverlay.classList.remove('active');
    }

    toggleStudied(topicId) {
        if (this.studiedTopics.has(topicId)) {
            this.studiedTopics.delete(topicId);
        } else {
            this.studiedTopics.add(topicId);
        }

        const branch = document.querySelector(`[data-topic="${topicId}"]`);
        if (branch) {
            branch.classList.toggle('studied');
        }

        this.saveStudiedTopics();
        this.updateProgress();
    }

    isTopicStudied(topicId) {
        return this.studiedTopics.has(topicId);
    }

    updateProgress() {
        const completed = this.completedQuizzes.size;
        const total = this.totalQuizItems;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        this.progressFill.style.width = `${percentage}%`;
        this.progressValue.textContent = `${percentage}%`;
    }

    calculateTotalQuizItems() {
        let total = 0;
        this.data.topics.forEach(topic => {
            topic.subtopics.forEach(subtopic => {
                total += subtopic.keyPoints.length;
                total += subtopic.keyTerms.length;
            });
        });
        return total;
    }

    saveStudiedTopics() {
        localStorage.setItem('psy101_studied', JSON.stringify([...this.studiedTopics]));
    }

    loadStudiedTopics() {
        const saved = localStorage.getItem('psy101_studied');
        return saved ? new Set(JSON.parse(saved)) : new Set();
    }

    resetProgress() {
        // Clear completed quizzes
        this.completedQuizzes.clear();
        localStorage.removeItem('psy101_quizzes');

        // Update progress bar
        this.updateProgress();

        // Re-render the current detail panel if open to show brain icons again
        if (this.detailPanel.classList.contains('open')) {
            // Find currently open subtopic and refresh it
            const detailHeader = this.detailContent.querySelector('.detail-header');
            if (detailHeader) {
                // Close and inform user
                this.closeDetailPanel();
            }
        }

        // Visual feedback
        this.progressContainer.classList.add('pulse');
        setTimeout(() => this.progressContainer.classList.remove('pulse'), 600);

        alert('Progress has been reset! All quiz checkmarks have been cleared.');
    }

    resetSingleQuiz(buttonElement, quizId) {
        // Remove from completed quizzes
        this.completedQuizzes.delete(quizId);
        this.saveCompletedQuizzes();

        // Update the button to show brain icon again
        buttonElement.classList.remove('completed');
        buttonElement.innerHTML = '🧠';
        buttonElement.title = 'Test yourself';

        // Update progress bar
        this.updateProgress();

        // Visual feedback on progress bar
        this.progressContainer.classList.add('pulse');
        setTimeout(() => this.progressContainer.classList.remove('pulse'), 600);
    }

    handleSearch(query) {
        const normalizedQuery = query.toLowerCase().trim();

        if (!normalizedQuery) {
            // Show all topics
            document.querySelectorAll('.topic-branch').forEach(branch => {
                branch.classList.remove('hidden');
            });
            document.querySelectorAll('.subtopic-item').forEach(item => {
                item.classList.remove('hidden');
                // Remove any highlighting
                const text = item.querySelector('.subtopic-text');
                text.innerHTML = text.textContent;
            });
            return;
        }

        this.data.topics.forEach(topic => {
            const branch = document.querySelector(`[data-topic="${topic.id}"]`);
            let hasMatch = false;

            // Check topic title
            if (topic.title.toLowerCase().includes(normalizedQuery) ||
                topic.subtitle.toLowerCase().includes(normalizedQuery)) {
                hasMatch = true;
            }

            // Check subtopics
            topic.subtopics.forEach(subtopic => {
                const subtopicEl = document.querySelector(`[data-subtopic-id="${subtopic.id}"]`);
                const isSubtopicMatch =
                    subtopic.title.toLowerCase().includes(normalizedQuery) ||
                    subtopic.description.toLowerCase().includes(normalizedQuery) ||
                    subtopic.keyTerms.some(term => term.toLowerCase().includes(normalizedQuery)) ||
                    subtopic.keyPoints.some(point => point.toLowerCase().includes(normalizedQuery));

                if (isSubtopicMatch) {
                    hasMatch = true;
                    subtopicEl?.classList.remove('hidden');

                    // Highlight matching text in title
                    const text = subtopicEl?.querySelector('.subtopic-text');
                    if (text) {
                        const title = subtopic.title;
                        const regex = new RegExp(`(${this.escapeRegex(normalizedQuery)})`, 'gi');
                        text.innerHTML = title.replace(regex, '<span class="search-highlight">$1</span>');
                    }
                } else {
                    subtopicEl?.classList.add('hidden');
                    // Reset text
                    const text = subtopicEl?.querySelector('.subtopic-text');
                    if (text) text.innerHTML = subtopic.title;
                }
            });

            if (hasMatch) {
                branch?.classList.remove('hidden');
                // Auto-expand matching topics
                if (!this.expandedTopics.has(topic.id)) {
                    this.expandedTopics.add(topic.id);
                    branch?.classList.add('expanded');
                }
            } else {
                branch?.classList.add('hidden');
            }
        });
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('psy101_theme', newTheme);

        // Update button icon
        const icon = this.toggleThemeBtn.querySelector('.theme-icon');
        icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('psy101_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        const icon = this.toggleThemeBtn.querySelector('.theme-icon');
        icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    // ================================================
    // Quiz System Methods
    // ================================================

    loadCompletedQuizzes() {
        const saved = localStorage.getItem('psy101_quizzes');
        return saved ? new Set(JSON.parse(saved)) : new Set();
    }

    saveCompletedQuizzes() {
        localStorage.setItem('psy101_quizzes', JSON.stringify([...this.completedQuizzes]));
    }

    openKeypointQuiz(quizId, content) {
        this.currentQuizId = quizId;

        // Generate a question about the key point
        const question = this.generateKeypointQuestion(content);
        this.showQuizModal(question);
    }

    openTermQuiz(quizId, term) {
        this.currentQuizId = quizId;

        // Get the definition
        const definition = TERM_DEFINITIONS[term];
        if (!definition) {
            alert('No definition available for this term.');
            return;
        }

        const question = this.generateTermQuestion(term, definition);
        this.showQuizModal(question);
    }

    generateKeypointQuestion(content) {
        // Extract key information and create a fill-in-the-blank or factual question
        const words = content.split(' ');

        // Find a key word or phrase to blank out (usually capitalized words, numbers, or technical terms)
        const keywordPatterns = [
            /\((\d{4})\)/,  // Years in parentheses
            /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g,  // Proper nouns
            /(\d+(?:\.\d+)?%?)/,  // Numbers and percentages
        ];

        let blankWord = '';
        let questionText = content;

        // Try to find a good keyword to blank out
        for (const pattern of keywordPatterns) {
            const matches = content.match(pattern);
            if (matches && matches.length > 0) {
                blankWord = matches[0];
                break;
            }
        }

        // If no good keyword found, pick a random important word
        if (!blankWord) {
            const importantWords = words.filter(w => w.length > 5 && /^[a-zA-Z]/.test(w));
            if (importantWords.length > 0) {
                blankWord = importantWords[Math.floor(Math.random() * importantWords.length)];
            } else {
                blankWord = words[Math.floor(words.length / 2)];
            }
        }

        // Clean up the blank word
        blankWord = blankWord.replace(/[(),:;]/g, '');

        // Create the question
        questionText = `Complete the statement: "${content.replace(blankWord, '_____')}"`;

        // Generate wrong answers
        const wrongAnswers = this.generateWrongAnswers(blankWord, 'keypoint');

        return {
            question: questionText,
            correct: blankWord,
            options: this.shuffleArray([blankWord, ...wrongAnswers])
        };
    }

    generateTermQuestion(term, definition) {
        // Create a "what is this term" question
        const questionText = `Which term matches this definition?\n\n"${definition}"`;

        // Generate wrong term answers
        const wrongAnswers = this.generateWrongAnswers(term, 'term');

        return {
            question: questionText,
            correct: term,
            options: this.shuffleArray([term, ...wrongAnswers])
        };
    }

    generateWrongAnswers(correct, type) {
        const wrongAnswers = [];

        if (type === 'term') {
            // Get random terms from definitions
            const allTerms = Object.keys(TERM_DEFINITIONS).filter(t => t !== correct);
            const shuffled = this.shuffleArray([...allTerms]);
            wrongAnswers.push(...shuffled.slice(0, 3));
        } else {
            // Generate plausible wrong answers for keypoints
            const variations = [
                correct.replace(/(\d+)/, (m) => String(parseInt(m) + Math.floor(Math.random() * 20) - 10)),
                this.getRandomTerm(),
                this.getRandomTerm(),
                this.getRandomTerm()
            ].filter(a => a !== correct);
            wrongAnswers.push(...variations.slice(0, 3));
        }

        return wrongAnswers.slice(0, 3);
    }

    getRandomTerm() {
        const terms = Object.keys(TERM_DEFINITIONS);
        return terms[Math.floor(Math.random() * terms.length)];
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showQuizModal(questionData) {
        this.currentCorrectAnswer = questionData.correct;

        this.quizQuestion.textContent = questionData.question;
        this.quizResult.classList.add('hidden');
        this.quizResult.className = 'quiz-result hidden';

        const letters = ['A', 'B', 'C', 'D'];
        this.quizOptions.innerHTML = questionData.options.map((option, idx) => `
            <button class="quiz-option" data-answer="${option}">
                <span class="quiz-option-letter">${letters[idx]}</span>
                <span>${option}</span>
            </button>
        `).join('');

        this.quizModal.classList.add('active');
        this.quizOverlay.classList.add('active');
    }

    handleQuizAnswer(optionElement) {
        const selectedAnswer = optionElement.dataset.answer;
        const isCorrect = selectedAnswer === this.currentCorrectAnswer;

        // Disable all options
        const allOptions = this.quizOptions.querySelectorAll('.quiz-option');
        allOptions.forEach(opt => {
            opt.disabled = true;
            if (opt.dataset.answer === this.currentCorrectAnswer) {
                opt.classList.add('correct');
            }
        });

        if (isCorrect) {
            optionElement.classList.add('correct');
            this.quizResult.innerHTML = `
                <div class="quiz-result-icon">🎉</div>
                <div>Correct! Great job!</div>
            `;
            this.quizResult.className = 'quiz-result correct';

            // Mark quiz as completed
            this.markQuizComplete(this.currentQuizId);
        } else {
            optionElement.classList.add('incorrect');
            this.quizResult.innerHTML = `
                <div class="quiz-result-icon">❌</div>
                <div>Not quite. The correct answer is: <strong>${this.currentCorrectAnswer}</strong></div>
            `;
            this.quizResult.className = 'quiz-result incorrect';
        }

        this.quizResult.classList.remove('hidden');

        // Auto-close after delay if correct
        if (isCorrect) {
            setTimeout(() => this.closeQuizModal(), 1500);
        }
    }

    markQuizComplete(quizId) {
        this.completedQuizzes.add(quizId);
        this.saveCompletedQuizzes();
        this.updateProgress();

        // Update the button in the DOM
        const btn = document.querySelector(`[data-quiz-id="${quizId}"]`);
        if (btn) {
            btn.classList.add('completed');
            btn.innerHTML = '';
            btn.title = 'Completed!';
        }

        // Pulse the progress bar
        this.progressContainer.classList.add('pulse');
        setTimeout(() => this.progressContainer.classList.remove('pulse'), 600);
    }

    closeQuizModal() {
        this.quizModal.classList.remove('active');
        this.quizOverlay.classList.remove('active');
        this.currentQuizId = null;
        this.currentCorrectAnswer = null;
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.mindMap = new PSY101MindMap();
});

