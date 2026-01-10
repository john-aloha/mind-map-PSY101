# Docker Setup for Psychology 101 Mind Map

This document explains how to run the Psychology 101 Mind Map application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## Quick Start

### Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up -d
```

2. Access the application at: http://localhost:8080

3. Stop the container:
```bash
docker-compose down
```

### Using Docker CLI

1. Build the image:
```bash
docker build -t psychology-101-mindmap:latest .
```

2. Run the container:
```bash
docker run -d -p 8080:80 --name psychology-mindmap psychology-101-mindmap:latest
```

3. Access the application at: http://localhost:8080

4. Stop the container:
```bash
docker stop psychology-mindmap
docker rm psychology-mindmap
```

## Configuration

### Port Configuration

By default, the application is accessible on port 8080. To use a different port, modify the port mapping:

**Docker Compose:**
```yaml
ports:
  - "3000:80"  # Access on port 3000
```

**Docker CLI:**
```bash
docker run -d -p 3000:80 --name psychology-mindmap psychology-101-mindmap:latest
```

### Container Management

**View logs:**
```bash
docker-compose logs -f
# or
docker logs -f psychology-mindmap
```

**Restart container:**
```bash
docker-compose restart
# or
docker restart psychology-mindmap
```

**Health check:**
```bash
docker-compose ps
# or
docker ps
```

## Production Deployment

For production deployments, consider:

1. Using a reverse proxy (e.g., Traefik, nginx) for HTTPS
2. Setting up proper logging and monitoring
3. Configuring resource limits in docker-compose.yml
4. Using Docker secrets for sensitive configuration

## Troubleshooting

**Container won't start:**
- Check if port 8080 is already in use: `netstat -tuln | grep 8080`
- View container logs: `docker-compose logs`

**Cannot access the application:**
- Verify the container is running: `docker ps`
- Check the health status: `docker inspect psychology-mindmap`
- Ensure firewall rules allow traffic on port 8080

## Technical Details

- Base Image: nginx:alpine
- Web Server: nginx
- Port: 80 (internal), 8080 (external)
- Features:
  - Gzip compression enabled
  - Security headers configured
  - Static asset caching (1 year)
  - SPA routing support
  - Health checks
