// PSY101 Mind Map - Comprehensive Course Data
const PSY101_DATA = {
    topics: [
        {
            id: "intro",
            icon: "📖",
            title: "Introduction to Psychology",
            subtitle: "History, Methods & Perspectives",
            subtopics: [
                {
                    id: "intro-history",
                    title: "History of Psychology",
                    description: "Psychology emerged as a scientific discipline in the late 19th century. Understanding its roots helps contextualize modern approaches and debates in the field.",
                    keyPoints: [
                        "Wilhelm Wundt established the first psychology lab in Leipzig, Germany (1879)",
                        "Structuralism (Titchener) focused on breaking down mental processes into basic components",
                        "Functionalism (William James) emphasized the purpose of mental processes",
                        "Psychoanalysis (Freud) introduced the unconscious mind concept",
                        "Behaviorism (Watson, Skinner) focused on observable behavior",
                        "Humanistic psychology (Maslow, Rogers) emphasized personal growth",
                        "Cognitive revolution brought focus back to mental processes"
                    ],
                    keyTerms: ["Introspection", "Structuralism", "Functionalism", "Psychoanalysis", "Behaviorism", "Humanism", "Cognitive Psychology"]
                },
                {
                    id: "intro-perspectives",
                    title: "Major Psychological Perspectives",
                    description: "Modern psychology encompasses multiple theoretical perspectives, each offering unique insights into human behavior and mental processes.",
                    keyPoints: [
                        "Biological: Focus on genetics, brain, neurotransmitters, and evolution",
                        "Behavioral: Emphasis on learned behaviors through conditioning",
                        "Cognitive: Study of mental processes like thinking and memory",
                        "Psychodynamic: Unconscious motivations and early experiences",
                        "Humanistic: Free will, self-actualization, and personal growth",
                        "Sociocultural: Impact of culture and social context",
                        "Evolutionary: Adaptive value of behaviors for survival"
                    ],
                    keyTerms: ["Biopsychosocial Model", "Eclectic Approach", "Nature vs. Nurture", "Reductionism", "Holism"]
                },
                {
                    id: "intro-methods",
                    title: "Research Methods",
                    description: "Psychology uses scientific methods to systematically study behavior and mental processes, ensuring findings are reliable and valid.",
                    keyPoints: [
                        "Scientific method: observation, hypothesis, experiment, analysis, conclusion",
                        "Experimental research: manipulates variables to establish causation",
                        "Correlational research: examines relationships between variables",
                        "Case studies: in-depth analysis of individuals or groups",
                        "Surveys and questionnaires for large-scale data collection",
                        "Naturalistic observation in real-world settings",
                        "Longitudinal vs. cross-sectional designs"
                    ],
                    keyTerms: ["Independent Variable", "Dependent Variable", "Control Group", "Random Assignment", "Double-Blind", "Correlation", "Validity", "Reliability"]
                },
                {
                    id: "intro-ethics",
                    title: "Ethics in Research",
                    description: "Ethical guidelines protect research participants and ensure the integrity of psychological research.",
                    keyPoints: [
                        "Informed consent is required before participation",
                        "Participants have the right to withdraw at any time",
                        "Confidentiality and privacy must be maintained",
                        "Deception should be minimized and debriefing provided",
                        "IRB (Institutional Review Board) approval required",
                        "Special protections for vulnerable populations",
                        "Animal research follows strict ethical guidelines"
                    ],
                    keyTerms: ["Informed Consent", "Debriefing", "Confidentiality", "IRB", "APA Ethics Code", "Deception"]
                }
            ]
        },
        {
            id: "bio",
            icon: "🧬",
            title: "Biological Psychology",
            subtitle: "Brain, Neurons & Nervous System",
            subtopics: [
                {
                    id: "bio-neurons",
                    title: "Neurons & Neural Communication",
                    description: "Neurons are the fundamental building blocks of the nervous system, transmitting information through electrical and chemical signals.",
                    keyPoints: [
                        "Neuron structure: dendrites, cell body (soma), axon, terminal buttons",
                        "Action potential: all-or-nothing electrical impulse",
                        "Resting potential is approximately -70 millivolts",
                        "Synaptic transmission involves neurotransmitter release",
                        "Neurotransmitters bind to receptors on postsynaptic neuron",
                        "Reuptake, degradation, or diffusion clears neurotransmitters",
                        "Glial cells support and protect neurons"
                    ],
                    keyTerms: ["Action Potential", "Synapse", "Neurotransmitter", "Myelin Sheath", "Threshold", "Refractory Period", "Glial Cells"]
                },
                {
                    id: "bio-neurotransmitters",
                    title: "Major Neurotransmitters",
                    description: "Different neurotransmitters serve different functions and are implicated in various psychological disorders when imbalanced.",
                    keyPoints: [
                        "Dopamine: reward, motivation, movement (Parkinson's, addiction)",
                        "Serotonin: mood, sleep, appetite (depression, anxiety)",
                        "Norepinephrine: arousal, alertness, mood",
                        "GABA: primary inhibitory neurotransmitter (anxiety)",
                        "Glutamate: primary excitatory neurotransmitter (learning)",
                        "Acetylcholine: muscle movement, memory (Alzheimer's)",
                        "Endorphins: pain relief, pleasure"
                    ],
                    keyTerms: ["Dopamine", "Serotonin", "GABA", "Glutamate", "Acetylcholine", "Endorphins", "Agonist", "Antagonist"]
                },
                {
                    id: "bio-brain",
                    title: "Brain Structure & Function",
                    description: "The brain is organized into specialized regions that work together to produce behavior, cognition, and emotion.",
                    keyPoints: [
                        "Brainstem: basic survival functions (breathing, heart rate)",
                        "Cerebellum: coordination, balance, motor learning",
                        "Limbic system: emotion, memory, motivation",
                        "Thalamus: sensory relay station",
                        "Hypothalamus: homeostasis, hunger, thirst, body temp",
                        "Cerebral cortex: higher cognitive functions",
                        "Four lobes: frontal, parietal, temporal, occipital"
                    ],
                    keyTerms: ["Cerebral Cortex", "Limbic System", "Hippocampus", "Amygdala", "Prefrontal Cortex", "Corpus Callosum", "Plasticity"]
                },
                {
                    id: "bio-nervous",
                    title: "Nervous System Organization",
                    description: "The nervous system is divided into central and peripheral components that coordinate bodily functions and behavior.",
                    keyPoints: [
                        "Central Nervous System (CNS): brain and spinal cord",
                        "Peripheral Nervous System (PNS): all other nerves",
                        "Somatic nervous system: voluntary muscle control",
                        "Autonomic nervous system: involuntary functions",
                        "Sympathetic: fight-or-flight response",
                        "Parasympathetic: rest-and-digest response",
                        "Endocrine system works with nervous system via hormones"
                    ],
                    keyTerms: ["CNS", "PNS", "Autonomic", "Sympathetic", "Parasympathetic", "Hormones", "Endocrine System"]
                },
                {
                    id: "bio-genetics",
                    title: "Genetics & Behavior",
                    description: "Genes influence behavior and psychological traits, but environment also plays a crucial role in their expression.",
                    keyPoints: [
                        "DNA contains genetic instructions in chromosomes",
                        "Genes can be dominant or recessive",
                        "Heritability estimates the genetic contribution to traits",
                        "Twin studies compare identical vs. fraternal twins",
                        "Adoption studies separate genetic and environmental influences",
                        "Epigenetics: environmental factors affect gene expression",
                        "Gene-environment interactions shape behavior"
                    ],
                    keyTerms: ["Heritability", "Twin Studies", "Epigenetics", "Genotype", "Phenotype", "Behavioral Genetics"]
                }
            ]
        },
        {
            id: "sensation",
            icon: "👁️",
            title: "Sensation & Perception",
            subtitle: "How We Experience the World",
            subtopics: [
                {
                    id: "sensation-basics",
                    title: "Sensation Fundamentals",
                    description: "Sensation is the process by which sensory receptors detect and transduce physical stimuli into neural signals.",
                    keyPoints: [
                        "Transduction converts physical energy to neural signals",
                        "Absolute threshold: minimum stimulus detected 50% of the time",
                        "Difference threshold (JND): smallest detectable difference",
                        "Weber's Law: JND is proportional to stimulus magnitude",
                        "Signal detection theory: factors affecting stimulus detection",
                        "Sensory adaptation: decreased sensitivity over time",
                        "Subliminal perception: processing below awareness"
                    ],
                    keyTerms: ["Transduction", "Absolute Threshold", "Difference Threshold", "Weber's Law", "Signal Detection", "Sensory Adaptation"]
                },
                {
                    id: "sensation-vision",
                    title: "Vision",
                    description: "Vision is our most dominant sense, involving complex processing of light information by the eyes and brain.",
                    keyPoints: [
                        "Light enters through cornea, pupil, and lens",
                        "Retina contains photoreceptors: rods and cones",
                        "Rods: peripheral vision, low light, no color",
                        "Cones: color vision, detail, concentrated in fovea",
                        "Trichromatic theory: three types of cones (RGB)",
                        "Opponent-process theory: color pairs (red-green, blue-yellow)",
                        "Visual information processed in occipital lobe"
                    ],
                    keyTerms: ["Retina", "Rods", "Cones", "Fovea", "Optic Nerve", "Trichromatic Theory", "Opponent-Process Theory"]
                },
                {
                    id: "sensation-hearing",
                    title: "Hearing",
                    description: "Audition involves the detection and processing of sound waves, enabling speech comprehension and environmental awareness.",
                    keyPoints: [
                        "Sound waves have frequency (pitch) and amplitude (loudness)",
                        "Outer ear collects sound; eardrum vibrates",
                        "Middle ear bones (hammer, anvil, stirrup) amplify vibrations",
                        "Cochlea in inner ear contains hair cells",
                        "Place theory: pitch encoded by location on basilar membrane",
                        "Frequency theory: pitch encoded by firing rate",
                        "Auditory cortex in temporal lobe processes sound"
                    ],
                    keyTerms: ["Cochlea", "Hair Cells", "Basilar Membrane", "Place Theory", "Frequency Theory", "Decibels"]
                },
                {
                    id: "sensation-other",
                    title: "Other Senses",
                    description: "Beyond vision and hearing, we have several other sensory systems that provide crucial information about our bodies and environment.",
                    keyPoints: [
                        "Smell (olfaction): olfactory receptors in nasal cavity",
                        "Taste (gustation): five basic tastes on tongue",
                        "Touch: pressure, temperature, pain receptors in skin",
                        "Kinesthesis: sense of body position and movement",
                        "Vestibular sense: balance and spatial orientation",
                        "Gate-control theory of pain",
                        "Synesthesia: blending of senses"
                    ],
                    keyTerms: ["Olfaction", "Gustation", "Kinesthesis", "Vestibular Sense", "Gate-Control Theory", "Proprioception"]
                },
                {
                    id: "perception",
                    title: "Perceptual Organization",
                    description: "Perception is the process of organizing and interpreting sensory information to give it meaning.",
                    keyPoints: [
                        "Bottom-up processing: data-driven, from senses to brain",
                        "Top-down processing: concept-driven, from expectations",
                        "Gestalt principles: proximity, similarity, closure, continuity",
                        "Figure-ground organization separates objects from background",
                        "Depth perception: binocular and monocular cues",
                        "Perceptual constancies: size, shape, color",
                        "Perceptual set: expectations influence perception"
                    ],
                    keyTerms: ["Gestalt", "Figure-Ground", "Depth Cues", "Perceptual Constancy", "Bottom-Up", "Top-Down", "Perceptual Set"]
                }
            ]
        },
        {
            id: "consciousness",
            icon: "🌙",
            title: "Consciousness",
            subtitle: "Sleep, Dreams & Altered States",
            subtopics: [
                {
                    id: "consciousness-nature",
                    title: "Nature of Consciousness",
                    description: "Consciousness refers to our awareness of ourselves and our environment, varying in levels and states throughout the day.",
                    keyPoints: [
                        "Consciousness exists on a continuum",
                        "Selective attention: focusing on specific stimuli",
                        "Inattentional blindness: missing obvious stimuli",
                        "Change blindness: failing to notice changes",
                        "Divided attention: multitasking limitations",
                        "Automatic vs. controlled processing",
                        "Daydreaming and mind wandering"
                    ],
                    keyTerms: ["Selective Attention", "Inattentional Blindness", "Change Blindness", "Cocktail Party Effect", "Automatic Processing"]
                },
                {
                    id: "consciousness-sleep",
                    title: "Sleep & Sleep Stages",
                    description: "Sleep is a naturally recurring state of altered consciousness characterized by distinct brain wave patterns and stages.",
                    keyPoints: [
                        "Circadian rhythms: 24-hour biological clock",
                        "NREM Stage 1: light sleep, theta waves",
                        "NREM Stage 2: sleep spindles, K-complexes",
                        "NREM Stage 3: deep sleep, delta waves",
                        "REM sleep: vivid dreams, muscle paralysis",
                        "Sleep cycles last approximately 90 minutes",
                        "REM increases toward morning"
                    ],
                    keyTerms: ["Circadian Rhythm", "NREM", "REM", "Delta Waves", "Sleep Spindles", "Melatonin"]
                },
                {
                    id: "consciousness-dreams",
                    title: "Dreams & Dream Theories",
                    description: "Dreams are vivid sensory experiences that occur during sleep, particularly during REM stages, with various theoretical explanations.",
                    keyPoints: [
                        "Freud: dreams as wish fulfillment (manifest vs. latent content)",
                        "Activation-synthesis theory: brain creating meaning from random signals",
                        "Information-processing: consolidating memories and experiences",
                        "Problem-solving: working through problems during sleep",
                        "Lucid dreaming: awareness of dreaming while dreaming",
                        "Nightmares vs. night terrors",
                        "Cultural variations in dream interpretation"
                    ],
                    keyTerms: ["Manifest Content", "Latent Content", "Activation-Synthesis", "Lucid Dreaming", "REM Rebound"]
                },
                {
                    id: "consciousness-disorders",
                    title: "Sleep Disorders",
                    description: "Various disorders can disrupt normal sleep patterns, affecting health, mood, and daily functioning.",
                    keyPoints: [
                        "Insomnia: difficulty falling or staying asleep",
                        "Sleep apnea: breathing interruptions during sleep",
                        "Narcolepsy: sudden attacks of sleep",
                        "Sleep paralysis: inability to move upon waking",
                        "Sleepwalking (somnambulism): occurs in deep sleep",
                        "REM sleep behavior disorder: acting out dreams",
                        "Restless legs syndrome: urge to move legs"
                    ],
                    keyTerms: ["Insomnia", "Sleep Apnea", "Narcolepsy", "Cataplexy", "Somnambulism", "Parasomnia"]
                },
                {
                    id: "consciousness-altered",
                    title: "Altered States of Consciousness",
                    description: "Consciousness can be altered through various means including drugs, meditation, and hypnosis.",
                    keyPoints: [
                        "Psychoactive drugs alter brain chemistry",
                        "Depressants: alcohol, barbiturates, opioids",
                        "Stimulants: caffeine, nicotine, cocaine, amphetamines",
                        "Hallucinogens: LSD, marijuana, ecstasy",
                        "Tolerance and withdrawal effects",
                        "Hypnosis: focused attention and suggestibility",
                        "Meditation: focused attention and relaxation"
                    ],
                    keyTerms: ["Psychoactive Drugs", "Tolerance", "Withdrawal", "Depressants", "Stimulants", "Hallucinogens", "Hypnosis"]
                }
            ]
        },
        {
            id: "learning",
            icon: "🎓",
            title: "Learning",
            subtitle: "Classical, Operant & Observational",
            subtopics: [
                {
                    id: "learning-classical",
                    title: "Classical Conditioning",
                    description: "Classical conditioning involves learning associations between stimuli, first demonstrated by Ivan Pavlov with his famous dog experiments.",
                    keyPoints: [
                        "Unconditioned stimulus (US) naturally triggers response",
                        "Unconditioned response (UR) is natural, unlearned reaction",
                        "Conditioned stimulus (CS) is previously neutral stimulus",
                        "Conditioned response (CR) is learned reaction to CS",
                        "Acquisition: initial learning of the association",
                        "Extinction: weakening when CS presented without US",
                        "Spontaneous recovery: reappearance after extinction"
                    ],
                    keyTerms: ["US", "UR", "CS", "CR", "Acquisition", "Extinction", "Spontaneous Recovery", "Generalization", "Discrimination"]
                },
                {
                    id: "learning-operant",
                    title: "Operant Conditioning",
                    description: "Operant conditioning involves learning from the consequences of behavior, primarily developed by B.F. Skinner.",
                    keyPoints: [
                        "Behavior followed by reinforcement increases",
                        "Behavior followed by punishment decreases",
                        "Positive: adding a stimulus; Negative: removing a stimulus",
                        "Primary reinforcers: innately satisfying (food, water)",
                        "Secondary reinforcers: learned value (money, grades)",
                        "Continuous vs. partial reinforcement schedules",
                        "Fixed-ratio, variable-ratio, fixed-interval, variable-interval"
                    ],
                    keyTerms: ["Reinforcement", "Punishment", "Shaping", "Extinction", "Schedules of Reinforcement", "Token Economy"]
                },
                {
                    id: "learning-observational",
                    title: "Observational Learning",
                    description: "Observational learning occurs by watching and imitating others, as demonstrated by Albert Bandura's research.",
                    keyPoints: [
                        "Bandura's Bobo doll experiment showed modeling aggression",
                        "Four processes: attention, retention, reproduction, motivation",
                        "Vicarious reinforcement: learning from others' consequences",
                        "Mirror neurons may support observational learning",
                        "Modeling effects on prosocial and antisocial behavior",
                        "Media violence and aggressive behavior research",
                        "Applications in therapy and education"
                    ],
                    keyTerms: ["Modeling", "Vicarious Reinforcement", "Mirror Neurons", "Bandura", "Social Learning Theory"]
                },
                {
                    id: "learning-cognitive",
                    title: "Cognitive Aspects of Learning",
                    description: "Learning involves cognitive processes beyond simple associations, including expectations, mental maps, and insight.",
                    keyPoints: [
                        "Latent learning: learning without immediate reinforcement",
                        "Cognitive maps: mental representations of environments",
                        "Insight learning: sudden understanding of solutions",
                        "Learned helplessness: giving up due to past failures",
                        "Biological preparedness: some associations learned more easily",
                        "Taste aversion learning: one-trial learning",
                        "Instinctive drift: biological constraints on learning"
                    ],
                    keyTerms: ["Latent Learning", "Cognitive Map", "Insight", "Learned Helplessness", "Biological Preparedness"]
                }
            ]
        },
        {
            id: "memory",
            icon: "💭",
            title: "Memory",
            subtitle: "Encoding, Storage & Retrieval",
            subtopics: [
                {
                    id: "memory-models",
                    title: "Memory Models",
                    description: "Several models explain how memory is organized and processed, from sensory input to long-term storage.",
                    keyPoints: [
                        "Atkinson-Shiffrin three-stage model",
                        "Sensory memory: brief, large capacity",
                        "Short-term memory: limited capacity (7±2 items)",
                        "Long-term memory: virtually unlimited capacity",
                        "Working memory model: central executive, phonological loop, visuospatial sketchpad",
                        "Levels of processing: shallow to deep",
                        "Parallel distributed processing models"
                    ],
                    keyTerms: ["Sensory Memory", "Short-Term Memory", "Long-Term Memory", "Working Memory", "Central Executive"]
                },
                {
                    id: "memory-encoding",
                    title: "Encoding Strategies",
                    description: "Encoding is the process of getting information into memory, and various strategies can improve this process.",
                    keyPoints: [
                        "Automatic vs. effortful processing",
                        "Chunking: grouping information into meaningful units",
                        "Mnemonics: memory aids (method of loci, peg-word)",
                        "Elaborative rehearsal: connecting to existing knowledge",
                        "Self-reference effect: relating info to yourself",
                        "Spacing effect: distributed practice is superior",
                        "Dual coding: verbal and visual encoding"
                    ],
                    keyTerms: ["Chunking", "Mnemonics", "Elaborative Rehearsal", "Spacing Effect", "Encoding Specificity"]
                },
                {
                    id: "memory-storage",
                    title: "Memory Storage & Types",
                    description: "Long-term memory consists of different systems storing different types of information in distinct brain regions.",
                    keyPoints: [
                        "Explicit (declarative) memory: conscious recall",
                        "Semantic memory: facts and general knowledge",
                        "Episodic memory: personal experiences and events",
                        "Implicit (nondeclarative) memory: unconscious",
                        "Procedural memory: skills and habits",
                        "Hippocampus critical for forming new explicit memories",
                        "Long-term potentiation (LTP): neural basis of memory"
                    ],
                    keyTerms: ["Explicit Memory", "Implicit Memory", "Semantic", "Episodic", "Procedural", "Hippocampus", "LTP"]
                },
                {
                    id: "memory-retrieval",
                    title: "Retrieval & Forgetting",
                    description: "Retrieval involves accessing stored memories, while forgetting can occur for various reasons at different stages.",
                    keyPoints: [
                        "Recall vs. recognition retrieval",
                        "Retrieval cues aid memory access",
                        "Context-dependent memory: environmental cues",
                        "State-dependent memory: internal state cues",
                        "Encoding failure: information never stored",
                        "Storage decay: memories fade over time",
                        "Retrieval failure: interference (proactive, retroactive)"
                    ],
                    keyTerms: ["Recall", "Recognition", "Retrieval Cues", "Proactive Interference", "Retroactive Interference", "Decay"]
                },
                {
                    id: "memory-distortion",
                    title: "Memory Distortion & Reconstruction",
                    description: "Memories are reconstructive and can be distorted, with significant implications for eyewitness testimony and daily life.",
                    keyPoints: [
                        "Memories are reconstructions, not recordings",
                        "Misinformation effect: post-event information alters memory",
                        "Source monitoring errors: misattributing memory origins",
                        "False memories can be created",
                        "Eyewitness testimony reliability concerns",
                        "Flashbulb memories: vivid but not always accurate",
                        "Repressed memories controversy"
                    ],
                    keyTerms: ["Misinformation Effect", "Source Monitoring", "False Memory", "Flashbulb Memory", "Schema"]
                }
            ]
        },
        {
            id: "cognition",
            icon: "🧩",
            title: "Cognition & Intelligence",
            subtitle: "Thinking, Language & Problem-Solving",
            subtopics: [
                {
                    id: "cognition-thinking",
                    title: "Thinking & Concepts",
                    description: "Cognition involves mental activities including forming concepts, making decisions, and solving problems.",
                    keyPoints: [
                        "Concepts: mental categories for objects and ideas",
                        "Prototypes: best examples of categories",
                        "Algorithms: step-by-step procedures",
                        "Heuristics: mental shortcuts for quick decisions",
                        "Representativeness heuristic: judging by similarity",
                        "Availability heuristic: judging by ease of recall",
                        "Anchoring bias: reliance on first information"
                    ],
                    keyTerms: ["Concepts", "Prototypes", "Algorithms", "Heuristics", "Cognitive Biases", "Mental Set"]
                },
                {
                    id: "cognition-problem",
                    title: "Problem-Solving & Creativity",
                    description: "Problem-solving requires overcoming obstacles to reach goals, while creativity involves producing novel and valuable ideas.",
                    keyPoints: [
                        "Well-defined vs. ill-defined problems",
                        "Trial and error vs. insight",
                        "Functional fixedness: fixed ways of viewing object use",
                        "Mental set: tendency to use familiar approaches",
                        "Creativity involves divergent thinking",
                        "Components: expertise, imaginative thinking, motivation",
                        "Incubation: stepping away can aid problem-solving"
                    ],
                    keyTerms: ["Functional Fixedness", "Mental Set", "Divergent Thinking", "Convergent Thinking", "Incubation"]
                },
                {
                    id: "cognition-language",
                    title: "Language",
                    description: "Language is a uniquely human ability involving complex rules and processes for communication.",
                    keyPoints: [
                        "Phonemes: basic sound units",
                        "Morphemes: smallest meaningful units",
                        "Grammar: syntax (rules) and semantics (meaning)",
                        "Language acquisition: babbling, one-word, two-word stages",
                        "Critical period for language learning",
                        "Chomsky's language acquisition device (LAD)",
                        "Linguistic relativity: language influences thought"
                    ],
                    keyTerms: ["Phonemes", "Morphemes", "Syntax", "Semantics", "LAD", "Linguistic Relativity", "Broca's Area", "Wernicke's Area"]
                },
                {
                    id: "cognition-intelligence",
                    title: "Intelligence",
                    description: "Intelligence is the ability to learn, reason, and adapt, though its nature and measurement remain debated.",
                    keyPoints: [
                        "Spearman's g factor: general intelligence",
                        "Gardner's multiple intelligences theory",
                        "Sternberg's triarchic theory: analytical, creative, practical",
                        "Emotional intelligence: perceiving and managing emotions",
                        "Intelligence tests: Stanford-Binet, Wechsler scales",
                        "IQ: mental age/chronological age × 100",
                        "Normal distribution with mean of 100, SD of 15"
                    ],
                    keyTerms: ["g Factor", "Multiple Intelligences", "Emotional Intelligence", "IQ", "Stanford-Binet", "WAIS"]
                },
                {
                    id: "cognition-influences",
                    title: "Influences on Intelligence",
                    description: "Both genetic and environmental factors influence intelligence, with ongoing debates about their relative contributions.",
                    keyPoints: [
                        "Heritability estimates around 50-80%",
                        "Shared environment effects decrease with age",
                        "Flynn effect: rising IQ scores over time",
                        "Nutrition and prenatal care affect brain development",
                        "Education and enriched environments boost scores",
                        "Stereotype threat can impair performance",
                        "Cultural bias concerns in testing"
                    ],
                    keyTerms: ["Heritability", "Flynn Effect", "Stereotype Threat", "Nature vs. Nurture", "Cultural Bias"]
                }
            ]
        },
        {
            id: "development",
            icon: "👶",
            title: "Human Development",
            subtitle: "Lifespan Growth & Change",
            subtopics: [
                {
                    id: "dev-prenatal",
                    title: "Prenatal Development",
                    description: "Development begins at conception and proceeds through three stages before birth.",
                    keyPoints: [
                        "Germinal stage: first two weeks, cell division",
                        "Embryonic stage: weeks 2-8, organs form",
                        "Fetal stage: week 9 to birth, growth and development",
                        "Teratogens: harmful agents (alcohol, drugs, viruses)",
                        "Fetal alcohol syndrome from maternal drinking",
                        "Critical periods for organ development",
                        "Maternal stress can affect fetal development"
                    ],
                    keyTerms: ["Germinal", "Embryonic", "Fetal", "Teratogens", "Fetal Alcohol Syndrome", "Placenta"]
                },
                {
                    id: "dev-infancy",
                    title: "Infancy & Childhood",
                    description: "The first years of life involve rapid physical, cognitive, and social-emotional development.",
                    keyPoints: [
                        "Motor development follows cephalocaudal, proximodistal patterns",
                        "Brain development: synaptic pruning and myelination",
                        "Piaget's sensorimotor stage: object permanence",
                        "Preoperational stage: egocentrism, symbolic thinking",
                        "Concrete operational: conservation, reversibility",
                        "Attachment: secure, avoidant, anxious-ambivalent",
                        "Ainsworth's Strange Situation experiment"
                    ],
                    keyTerms: ["Object Permanence", "Attachment", "Secure Attachment", "Strange Situation", "Temperament"]
                },
                {
                    id: "dev-cognitive",
                    title: "Cognitive Development",
                    description: "Piaget and others have explained how thinking abilities develop through childhood and beyond.",
                    keyPoints: [
                        "Piaget's four stages of cognitive development",
                        "Schemas: mental frameworks modified through experience",
                        "Assimilation: incorporating new info into existing schemas",
                        "Accommodation: modifying schemas for new information",
                        "Vygotsky's sociocultural theory",
                        "Zone of proximal development and scaffolding",
                        "Theory of mind develops around age 4"
                    ],
                    keyTerms: ["Schemas", "Assimilation", "Accommodation", "Conservation", "Zone of Proximal Development", "Theory of Mind"]
                },
                {
                    id: "dev-adolescence",
                    title: "Adolescence",
                    description: "Adolescence is marked by puberty, identity formation, and the transition to adult thinking and relationships.",
                    keyPoints: [
                        "Puberty: physical and sexual maturation",
                        "Brain development continues, especially prefrontal cortex",
                        "Piaget's formal operational stage: abstract reasoning",
                        "Erikson's identity vs. role confusion",
                        "Kohlberg's stages of moral development",
                        "Peer influence increases, parent influence decreases",
                        "Risk-taking behavior and adolescent egocentrism"
                    ],
                    keyTerms: ["Puberty", "Identity", "Formal Operations", "Moral Development", "Personal Fable", "Imaginary Audience"]
                },
                {
                    id: "dev-adulthood",
                    title: "Adulthood & Aging",
                    description: "Development continues through adulthood with changes in physical, cognitive, and social-emotional domains.",
                    keyPoints: [
                        "Physical changes: peak in 20s, gradual decline",
                        "Menopause and andropause hormonal changes",
                        "Crystallized intelligence maintained; fluid intelligence declines",
                        "Erikson: intimacy, generativity, ego integrity stages",
                        "Social clock: cultural expectations for life events",
                        "Successful aging: activity vs. disengagement theories",
                        "Death and dying: Kübler-Ross stages of grief"
                    ],
                    keyTerms: ["Crystallized Intelligence", "Fluid Intelligence", "Generativity", "Ego Integrity", "Social Clock"]
                }
            ]
        },
        {
            id: "motivation",
            icon: "🔥",
            title: "Motivation & Emotion",
            subtitle: "What Drives Our Behavior",
            subtopics: [
                {
                    id: "motivation-theories",
                    title: "Motivation Theories",
                    description: "Various theories explain what energizes and directs behavior toward specific goals.",
                    keyPoints: [
                        "Instinct theory: innate, fixed patterns of behavior",
                        "Drive-reduction theory: maintaining homeostasis",
                        "Arousal theory: optimal level of stimulation",
                        "Incentive theory: external stimuli motivation",
                        "Maslow's hierarchy of needs",
                        "Self-determination theory: autonomy, competence, relatedness",
                        "Intrinsic vs. extrinsic motivation"
                    ],
                    keyTerms: ["Homeostasis", "Arousal", "Incentive", "Hierarchy of Needs", "Intrinsic Motivation", "Extrinsic Motivation"]
                },
                {
                    id: "motivation-hunger",
                    title: "Hunger & Eating",
                    description: "Eating is regulated by complex physiological and psychological factors that can lead to disorders when disrupted.",
                    keyPoints: [
                        "Glucose levels and insulin regulate hunger",
                        "Ghrelin hormone signals hunger; leptin signals satiety",
                        "Hypothalamus: lateral (hunger), ventromedial (satiety)",
                        "Set-point theory vs. settling-point theory",
                        "Psychological factors: stress, emotions, social cues",
                        "Eating disorders: anorexia nervosa, bulimia nervosa",
                        "Obesity: genetic, psychological, and environmental factors"
                    ],
                    keyTerms: ["Ghrelin", "Leptin", "Hypothalamus", "Set Point", "Anorexia Nervosa", "Bulimia Nervosa", "Binge-Eating Disorder"]
                },
                {
                    id: "motivation-achievement",
                    title: "Achievement Motivation",
                    description: "Achievement motivation drives us to accomplish goals and attain success in various domains.",
                    keyPoints: [
                        "Need for achievement varies among individuals",
                        "Intrinsic motivation: internal satisfaction",
                        "Extrinsic motivation: external rewards",
                        "Overjustification effect: rewards diminish intrinsic motivation",
                        "Fixed vs. growth mindset (Dweck)",
                        "Goal-setting theory: specific goals improve performance",
                        "Self-efficacy: belief in one's capabilities"
                    ],
                    keyTerms: ["Achievement Motivation", "Overjustification", "Growth Mindset", "Self-Efficacy", "Goal Setting"]
                },
                {
                    id: "emotion-theories",
                    title: "Emotion Theories",
                    description: "Emotions involve physiological arousal, expressive behaviors, and conscious experience, with debate about their sequence.",
                    keyPoints: [
                        "James-Lange: physiological arousal precedes emotion",
                        "Cannon-Bard: arousal and emotion occur simultaneously",
                        "Two-factor theory: arousal + cognitive label = emotion",
                        "Cognitive appraisal: interpretation determines emotion",
                        "Basic emotions: cross-cultural universality",
                        "Facial feedback hypothesis: expressions affect emotions",
                        "Emotional contagion: catching others' emotions"
                    ],
                    keyTerms: ["James-Lange Theory", "Cannon-Bard Theory", "Two-Factor Theory", "Cognitive Appraisal", "Facial Feedback"]
                },
                {
                    id: "emotion-expression",
                    title: "Emotion Expression & Experience",
                    description: "Emotions are expressed through facial expressions, voice, and body language, with both universal and cultural variations.",
                    keyPoints: [
                        "Darwin: emotional expressions are universal and adaptive",
                        "Ekman: six basic emotions with universal expressions",
                        "Display rules: cultural norms for expressing emotions",
                        "Gender differences in emotional expression",
                        "Emotional intelligence: perceiving, using, managing emotions",
                        "Subjective well-being: happiness and life satisfaction",
                        "Adaptation-level phenomenon: relative judgment"
                    ],
                    keyTerms: ["Basic Emotions", "Display Rules", "Emotional Intelligence", "Subjective Well-Being", "Hedonic Treadmill"]
                }
            ]
        },
        {
            id: "personality",
            icon: "🎭",
            title: "Personality",
            subtitle: "Individual Differences & Traits",
            subtopics: [
                {
                    id: "personality-psychodynamic",
                    title: "Psychodynamic Theories",
                    description: "Psychodynamic theories, originating with Freud, emphasize unconscious processes and early childhood experiences.",
                    keyPoints: [
                        "Freud's personality structure: id, ego, superego",
                        "Id: pleasure principle, unconscious drives",
                        "Ego: reality principle, mediates between id and superego",
                        "Superego: internalized moral standards",
                        "Defense mechanisms: repression, denial, projection",
                        "Psychosexual stages: oral, anal, phallic, latency, genital",
                        "Neo-Freudians: Jung, Adler, Horney modified Freud's theories"
                    ],
                    keyTerms: ["Id", "Ego", "Superego", "Unconscious", "Defense Mechanisms", "Psychosexual Stages"]
                },
                {
                    id: "personality-humanistic",
                    title: "Humanistic Theories",
                    description: "Humanistic theories focus on personal growth, free will, and the inherent goodness of human nature.",
                    keyPoints: [
                        "Maslow: self-actualization as highest need",
                        "Rogers: person-centered theory",
                        "Self-concept: beliefs about oneself",
                        "Unconditional positive regard promotes growth",
                        "Conditions of worth: conditional acceptance",
                        "Ideal self vs. actual self discrepancy",
                        "Emphasis on subjective experience"
                    ],
                    keyTerms: ["Self-Actualization", "Self-Concept", "Unconditional Positive Regard", "Conditions of Worth", "Real Self", "Ideal Self"]
                },
                {
                    id: "personality-trait",
                    title: "Trait Theories",
                    description: "Trait theories describe personality in terms of stable, consistent patterns of behavior and thought.",
                    keyPoints: [
                        "Traits: relatively stable characteristics",
                        "Allport: cardinal, central, secondary traits",
                        "Cattell: 16 personality factors",
                        "Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
                        "Traits predict behavior across situations",
                        "Person-situation debate: consistency vs. context",
                        "Genetic influences on traits"
                    ],
                    keyTerms: ["Traits", "Big Five", "OCEAN", "Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"]
                },
                {
                    id: "personality-social",
                    title: "Social-Cognitive Theories",
                    description: "Social-cognitive theories emphasize the interaction between personality, behavior, and environment.",
                    keyPoints: [
                        "Bandura's reciprocal determinism",
                        "Self-efficacy: belief in one's capabilities",
                        "Locus of control: internal vs. external",
                        "Observational learning shapes personality",
                        "Cognitive factors mediate environment effects",
                        "Self-regulation and behavior modification",
                        "Personal agency and choice"
                    ],
                    keyTerms: ["Reciprocal Determinism", "Self-Efficacy", "Locus of Control", "Social Learning"]
                },
                {
                    id: "personality-assessment",
                    title: "Personality Assessment",
                    description: "Various methods are used to measure personality, each with strengths and limitations.",
                    keyPoints: [
                        "Self-report inventories: MMPI, NEO-PI-R",
                        "Projective tests: Rorschach, TAT",
                        "Reliability: consistency of measurement",
                        "Validity: measuring what it claims to measure",
                        "MMPI: clinical assessment, validity scales",
                        "Barnum effect: accepting vague descriptions",
                        "Cultural considerations in assessment"
                    ],
                    keyTerms: ["MMPI", "NEO-PI-R", "Rorschach", "TAT", "Projective Tests", "Reliability", "Validity"]
                }
            ]
        },
        {
            id: "social",
            icon: "👥",
            title: "Social Psychology",
            subtitle: "How Others Influence Us",
            subtopics: [
                {
                    id: "social-attribution",
                    title: "Social Thinking & Attribution",
                    description: "Social psychology studies how we think about, influence, and relate to others, including how we explain behavior.",
                    keyPoints: [
                        "Attribution: explaining causes of behavior",
                        "Fundamental attribution error: overemphasizing disposition",
                        "Actor-observer bias: different attributions for self vs. others",
                        "Self-serving bias: credit for success, blame external for failure",
                        "Just-world phenomenon: believing world is fair",
                        "Attitudes: evaluative reactions to objects/people",
                        "Cognitive dissonance: discomfort from inconsistent beliefs"
                    ],
                    keyTerms: ["Attribution", "Fundamental Attribution Error", "Self-Serving Bias", "Cognitive Dissonance", "Attitudes"]
                },
                {
                    id: "social-influence",
                    title: "Social Influence",
                    description: "We are influenced by social situations in powerful ways, often conforming to group norms or complying with authority.",
                    keyPoints: [
                        "Conformity: adjusting behavior to match group norms",
                        "Asch's line study: conformity to incorrect majority",
                        "Normative vs. informational social influence",
                        "Obedience: following orders from authority",
                        "Milgram's shock experiments: obedience to authority",
                        "Compliance techniques: foot-in-door, door-in-face",
                        "Group polarization and groupthink"
                    ],
                    keyTerms: ["Conformity", "Obedience", "Compliance", "Normative Influence", "Milgram", "Groupthink"]
                },
                {
                    id: "social-group",
                    title: "Group Behavior",
                    description: "Being in groups affects our behavior, sometimes facilitating performance and sometimes inhibiting it.",
                    keyPoints: [
                        "Social facilitation: improved performance on simple tasks",
                        "Social loafing: reduced effort in groups",
                        "Deindividuation: loss of self-awareness in groups",
                        "Group polarization: strengthening of group attitudes",
                        "Groupthink: desire for harmony overrides critical thinking",
                        "Minority influence: how minorities can change majorities",
                        "Leadership styles: task vs. social leadership"
                    ],
                    keyTerms: ["Social Facilitation", "Social Loafing", "Deindividuation", "Group Polarization", "Groupthink"]
                },
                {
                    id: "social-prejudice",
                    title: "Prejudice & Discrimination",
                    description: "Prejudice involves negative attitudes toward groups, while discrimination involves negative behavior.",
                    keyPoints: [
                        "Prejudice: preconceived negative judgment",
                        "Stereotypes: generalized beliefs about groups",
                        "Discrimination: unjustified negative behavior",
                        "In-group bias: favoritism toward own group",
                        "Out-group homogeneity: seeing others as all alike",
                        "Scapegoat theory: blaming others for frustrations",
                        "Reducing prejudice: contact hypothesis, cooperation"
                    ],
                    keyTerms: ["Prejudice", "Stereotype", "Discrimination", "In-group Bias", "Scapegoating", "Contact Hypothesis"]
                },
                {
                    id: "social-attraction",
                    title: "Attraction & Relationships",
                    description: "Social psychology examines the factors that influence interpersonal attraction and relationship development.",
                    keyPoints: [
                        "Proximity: physical and functional nearness",
                        "Mere exposure effect: familiarity breeds liking",
                        "Physical attractiveness: cultural standards, symmetry",
                        "Similarity: attracts more than complementarity",
                        "Sternberg's triangular theory: intimacy, passion, commitment",
                        "Attachment styles in adult relationships",
                        "Equity theory: fairness in relationships"
                    ],
                    keyTerms: ["Proximity", "Mere Exposure", "Similarity", "Triangular Theory", "Attachment", "Equity Theory"]
                },
                {
                    id: "social-prosocial",
                    title: "Prosocial Behavior & Aggression",
                    description: "Social psychology studies both helpful and harmful behaviors and the factors that influence them.",
                    keyPoints: [
                        "Altruism: selfless concern for others",
                        "Bystander effect: less help when others present",
                        "Diffusion of responsibility in groups",
                        "Reciprocity norm: help those who help you",
                        "Social responsibility norm: help those in need",
                        "Aggression: biological and social factors",
                        "Frustration-aggression hypothesis"
                    ],
                    keyTerms: ["Altruism", "Bystander Effect", "Diffusion of Responsibility", "Aggression", "Social Norms"]
                }
            ]
        },
        {
            id: "disorders",
            icon: "🩺",
            title: "Psychological Disorders",
            subtitle: "Understanding Mental Health",
            subtopics: [
                {
                    id: "disorders-overview",
                    title: "Understanding Disorders",
                    description: "Psychological disorders are patterns of thoughts, feelings, or behaviors that are distressing and dysfunctional.",
                    keyPoints: [
                        "DSM-5: Diagnostic and Statistical Manual",
                        "Criteria: deviance, distress, dysfunction, danger",
                        "Medical model: disorders as illnesses",
                        "Biopsychosocial model: multiple factors",
                        "Diathesis-stress model: vulnerability + stress",
                        "Labeling effects and stigma",
                        "Cultural considerations in diagnosis"
                    ],
                    keyTerms: ["DSM-5", "Medical Model", "Biopsychosocial Model", "Diathesis-Stress", "Labeling", "Stigma"]
                },
                {
                    id: "disorders-anxiety",
                    title: "Anxiety Disorders",
                    description: "Anxiety disorders involve excessive fear and anxiety that interferes with daily functioning.",
                    keyPoints: [
                        "Generalized anxiety disorder: persistent worry",
                        "Panic disorder: sudden intense fear attacks",
                        "Phobias: irrational fears of specific objects/situations",
                        "Social anxiety disorder: fear of social situations",
                        "Agoraphobia: fear of places hard to escape",
                        "Biological, cognitive, and learning factors",
                        "High comorbidity with depression"
                    ],
                    keyTerms: ["GAD", "Panic Disorder", "Phobia", "Social Anxiety", "Agoraphobia", "Comorbidity"]
                },
                {
                    id: "disorders-ocd",
                    title: "OCD & Related Disorders",
                    description: "OCD and related disorders involve intrusive thoughts and repetitive behaviors.",
                    keyPoints: [
                        "Obsessions: intrusive, unwanted thoughts",
                        "Compulsions: repetitive behaviors or mental acts",
                        "Common themes: contamination, symmetry, harm",
                        "Body dysmorphic disorder: imagined appearance flaws",
                        "Hoarding disorder: difficulty discarding possessions",
                        "Trichotillomania: hair-pulling disorder",
                        "Neural circuits involving orbitofrontal cortex"
                    ],
                    keyTerms: ["Obsessions", "Compulsions", "OCD", "Body Dysmorphic Disorder", "Hoarding"]
                },
                {
                    id: "disorders-trauma",
                    title: "Trauma & Stressor-Related Disorders",
                    description: "These disorders develop following exposure to traumatic or stressful events.",
                    keyPoints: [
                        "PTSD: flashbacks, avoidance, hyperarousal",
                        "Acute stress disorder: symptoms within one month",
                        "Adjustment disorders: difficulty coping with stressors",
                        "Complex trauma and developmental effects",
                        "Risk and resilience factors",
                        "Evidence-based treatments available",
                        "Importance of social support"
                    ],
                    keyTerms: ["PTSD", "Trauma", "Flashbacks", "Hyperarousal", "Acute Stress Disorder", "Resilience"]
                },
                {
                    id: "disorders-mood",
                    title: "Mood Disorders",
                    description: "Mood disorders involve significant disturbances in emotion, from depression to mania.",
                    keyPoints: [
                        "Major depressive disorder: persistent sadness, hopelessness",
                        "Persistent depressive disorder (dysthymia)",
                        "Bipolar I: manic episodes",
                        "Bipolar II: hypomanic and depressive episodes",
                        "Cyclothymic disorder: chronic fluctuating moods",
                        "Biological factors: neurotransmitters, genetics",
                        "Cognitive factors: negative thinking patterns"
                    ],
                    keyTerms: ["Major Depression", "Bipolar Disorder", "Mania", "Dysthymia", "Serotonin", "Cognitive Triad"]
                },
                {
                    id: "disorders-schizophrenia",
                    title: "Schizophrenia Spectrum",
                    description: "Schizophrenia involves disruptions in thought, perception, and behavior.",
                    keyPoints: [
                        "Positive symptoms: hallucinations, delusions",
                        "Negative symptoms: flat affect, avolition",
                        "Disorganized symptoms: speech, behavior",
                        "Dopamine hypothesis and brain abnormalities",
                        "Genetic predisposition with environmental triggers",
                        "Enlarged ventricles, reduced frontal activity",
                        "Onset typically in late adolescence/early adulthood"
                    ],
                    keyTerms: ["Hallucinations", "Delusions", "Positive Symptoms", "Negative Symptoms", "Dopamine Hypothesis"]
                },
                {
                    id: "disorders-personality",
                    title: "Personality Disorders",
                    description: "Personality disorders are enduring, inflexible patterns that deviate from cultural expectations.",
                    keyPoints: [
                        "Cluster A: odd/eccentric (paranoid, schizoid, schizotypal)",
                        "Cluster B: dramatic/erratic (antisocial, borderline, histrionic, narcissistic)",
                        "Cluster C: anxious/fearful (avoidant, dependent, obsessive-compulsive)",
                        "Antisocial: disregard for others' rights",
                        "Borderline: instability in relationships, self-image",
                        "Difficult to treat due to ego-syntonic nature",
                        "Often comorbid with other disorders"
                    ],
                    keyTerms: ["Personality Disorders", "Cluster A/B/C", "Antisocial", "Borderline", "Narcissistic"]
                }
            ]
        },
        {
            id: "therapy",
            icon: "💚",
            title: "Therapy & Treatment",
            subtitle: "Approaches to Healing",
            subtopics: [
                {
                    id: "therapy-psychotherapy",
                    title: "Psychotherapy Overview",
                    description: "Psychotherapy involves trained therapists using psychological techniques to help clients overcome difficulties.",
                    keyPoints: [
                        "Common factors: therapeutic alliance, hope, safe environment",
                        "Evidence-based treatments supported by research",
                        "Eclectic/integrative approaches combine methods",
                        "Individual, group, couples, family therapy formats",
                        "Telehealth and online therapy options",
                        "Cultural competence in therapy",
                        "Therapist training and licensure requirements"
                    ],
                    keyTerms: ["Psychotherapy", "Therapeutic Alliance", "Evidence-Based", "Eclectic", "Mental Health Professional"]
                },
                {
                    id: "therapy-psychodynamic",
                    title: "Psychodynamic Therapies",
                    description: "Psychodynamic therapies aim to bring unconscious conflicts into conscious awareness.",
                    keyPoints: [
                        "Free association: saying whatever comes to mind",
                        "Dream analysis: exploring unconscious wishes",
                        "Transference: projecting feelings onto therapist",
                        "Resistance: unconscious blocking of painful material",
                        "Insight: understanding underlying conflicts",
                        "Modern adaptations are briefer and focused",
                        "Interpersonal therapy focuses on relationships"
                    ],
                    keyTerms: ["Free Association", "Dream Analysis", "Transference", "Resistance", "Insight", "Interpersonal Therapy"]
                },
                {
                    id: "therapy-humanistic",
                    title: "Humanistic Therapies",
                    description: "Humanistic therapies focus on self-awareness, personal growth, and the client's subjective experience.",
                    keyPoints: [
                        "Client-centered therapy (Rogers)",
                        "Unconditional positive regard: accepting client fully",
                        "Empathy: understanding client's perspective",
                        "Genuineness: therapist is authentic",
                        "Active listening and reflection",
                        "Gestalt therapy: present-focused awareness",
                        "Existential therapy: meaning and responsibility"
                    ],
                    keyTerms: ["Client-Centered", "Unconditional Positive Regard", "Empathy", "Genuineness", "Gestalt", "Existential"]
                },
                {
                    id: "therapy-behavioral",
                    title: "Behavioral Therapies",
                    description: "Behavioral therapies focus on changing maladaptive behaviors using learning principles.",
                    keyPoints: [
                        "Based on classical and operant conditioning",
                        "Systematic desensitization: gradual exposure with relaxation",
                        "Exposure therapy: confronting feared stimuli",
                        "Flooding: intense exposure to feared stimulus",
                        "Aversion therapy: pairing unwanted behavior with unpleasant stimulus",
                        "Token economies: reinforcement systems",
                        "Applied behavior analysis for autism"
                    ],
                    keyTerms: ["Systematic Desensitization", "Exposure Therapy", "Flooding", "Aversion Therapy", "Token Economy"]
                },
                {
                    id: "therapy-cognitive",
                    title: "Cognitive & CBT",
                    description: "Cognitive therapies focus on changing maladaptive thoughts that contribute to emotional problems.",
                    keyPoints: [
                        "Beck's cognitive therapy: identifying cognitive distortions",
                        "Ellis's REBT: disputing irrational beliefs",
                        "CBT combines cognitive and behavioral techniques",
                        "Cognitive restructuring: changing thought patterns",
                        "Behavioral experiments test beliefs",
                        "Homework assignments between sessions",
                        "Strong evidence base for many disorders"
                    ],
                    keyTerms: ["CBT", "Cognitive Distortions", "REBT", "Automatic Thoughts", "Cognitive Restructuring"]
                },
                {
                    id: "therapy-biomedical",
                    title: "Biomedical Therapies",
                    description: "Biomedical therapies treat psychological disorders with medical interventions.",
                    keyPoints: [
                        "Antidepressants: SSRIs, SNRIs, tricyclics, MAOIs",
                        "Antianxiety medications: benzodiazepines",
                        "Antipsychotics: typical and atypical",
                        "Mood stabilizers: lithium, anticonvulsants",
                        "ECT: electroconvulsive therapy for severe depression",
                        "TMS: transcranial magnetic stimulation",
                        "Psychosurgery: last resort (rare today)"
                    ],
                    keyTerms: ["SSRIs", "Antipsychotics", "Mood Stabilizers", "ECT", "TMS", "Pharmacotherapy"]
                },
                {
                    id: "therapy-effectiveness",
                    title: "Evaluating Therapies",
                    description: "Research evaluates therapy effectiveness to identify the most helpful treatments for different problems.",
                    keyPoints: [
                        "Meta-analyses combine results across studies",
                        "Therapy generally effective compared to no treatment",
                        "Different approaches work for different problems",
                        "Common factors may explain much of effectiveness",
                        "Placebo effects and regression to mean",
                        "Client factors: motivation, social support",
                        "Therapist factors: experience, relationship skills"
                    ],
                    keyTerms: ["Meta-Analysis", "Efficacy", "Effectiveness", "Common Factors", "Placebo Effect"]
                }
            ]
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PSY101_DATA;
}
