# Project Summary: STEAM Buds

## Overview

This project is a web application for STEAM Buds, a hands-on learning company for innovators in India. The application is built using the following technologies:

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router:** For handling routing within the application.

## Project Structure

The project follows a standard structure for a React application. Here are the key directories and files:

*   `src/`: This directory contains the main source code of the application.
    *   `components/`: Contains reusable React components like `Header` and `Footer`.
    *   `config/`: Contains configuration files for different aspects of the application, such as about, contact, and services.
    *   `images/`: Contains images used in the application.
    *   `pages/`: Contains the different pages of the application, such as `Home`, `About`, `Contact`, etc.
    *   `App.tsx`: The main application component.
    *   `main.tsx`: The entry point of the application.
*   `public/`: This directory contains static assets that are publicly accessible.
*   `package.json`: This file contains the project's metadata, dependencies, and scripts.
*   `vite.config.ts`: This file contains the configuration for Vite.
*   `tailwind.config.js`: This file contains the configuration for Tailwind CSS.
*   `tsconfig.json`: This file contains the configuration for TypeScript.

## Getting Started

To get started with the project, you need to have Node.js and npm installed.

1.  Install the dependencies:
    ```sh
    npm install
    ```
2.  Run the development server:
    ```sh
    npm run dev
    ```
3.  Build the application for production:
    ```sh
    npm run build
    ```

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run start`: Starts the application in production mode.

## Theme and Color Improvement Plan

### 1. Refactor Header.tsx to use Tailwind classes

*   **Goal:** Remove hardcoded styles and use Tailwind utility classes for consistency.
*   **Action:**
    *   Replace inline `style` attributes in `Header.tsx` with the corresponding Tailwind classes from `tailwind.config.js`.
    *   Utilize the existing `gradient-text` class for the "STEAM Buds" logo to create a consistent brand identity.

### 2. Establish a Clear Color Hierarchy

*   **Goal:** Create a semantic and manageable color system.
*   **Action:**
    *   Update `tailwind.config.js` to define `primary`, `secondary`, and `accent` colors.
    *   Map these to the existing `electric-blue`, `cyber-purple`, and `hot-pink` colors.

### 3. Update Button Styles

*   **Goal:** Ensure button styles are consistent with the new color hierarchy.
*   **Action:**
    *   Update the `btn-primary`, `btn-secondary`, and `btn-outline` classes in `index.css` to use the new `primary`, `secondary`, and `accent` colors.

### 4. Improve Readability

*   **Goal:** Make the header subtitle more legible.
*   **Action:**
    *   Increase the font size of the subtitle in `Header.tsx`.
    *   Adjust the color to a more readable shade from the palette.