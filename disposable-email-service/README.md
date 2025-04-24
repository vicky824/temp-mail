# Disposable Email Service

## Overview
This project is a full-stack disposable email service similar to temp-mail.org. It allows users to generate temporary email addresses and receive messages without revealing their personal email.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Containerization**: Docker

## Project Structure
- **client/**: Contains the React frontend application.
- **server/**: Contains the Node.js backend application.
- **Dockerfile.client**: Dockerfile for building the client application.
- **Dockerfile.server**: Dockerfile for building the server application.
- **docker-compose.yml**: Configuration for running the application with Docker.

## Setup Instructions

### Prerequisites
- Node.js
- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd disposable-email-service
   ```

2. Build and run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application at `http://localhost:3000`.

## Usage
- Generate a new email address using the "Generate new address" button on the home page.
- View received messages in the inbox.

## License
This project is licensed under the MIT License.