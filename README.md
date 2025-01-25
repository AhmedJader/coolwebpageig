# Project Overview

This repository contains a Next.js application that demonstrates various features and components, including text animations, audio playback, and cookie handling.

## Features

- **Text Animations**: Utilizes the `DecryptedText` component to create animated text effects on hover or when in view.
- **Audio Playback**: Plays audio files on specific user interactions.
- **Cookie Handling**: Sets cookies using API routes and handles user navigation based on cookie values.

## Components

- **DecryptedText**: A component that animates text with customizable speed, characters, and animation triggers.
- **TextAnim**: A component that showcases different examples of the `DecryptedText` component.
- **HackerText**: A component that displays animated text lines using the `DecryptedText` component and `framer-motion` for animations.
- **HomeServer**: A server-side component that conditionally includes client-side components.

## API Routes

- **Set-Cookie**: An API route that sets a cookie named `hasVisited` with a max age of 200 seconds.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## File Structure

- `src/app/components/`: Contains various React components used in the application.
- `src/app/welcome/`: Contains the main welcome page component.
- `src/app/api/set-cookie/`: Contains the API route for setting cookies.
- `DecryptedText/`: Contains the `DecryptedText` component.

## Getting Started

To get started with this project, follow the usage instructions above. Explore the different components and API routes to understand how they work and how they are integrated into the application.