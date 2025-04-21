# Pokémon App

This is a Pokémon App project that allows users to explore and interact with Pokémon data. Below is a comprehensive overview of the project, including the file structure, descriptions of each file and folder, and detailed instructions for setup and usage.

---

## Table of Contents

1. [File Structure](#file-structure)
2. [Description of Files and Folders](#description-of-files-and-folders)
   - [Root Directory](#root-directory)
   - [`src/` Directory](#src-directory)
   - [`public/` Directory](#public-directory)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
4. [Features](#features)

---

## File Structure

The project is organized into the following structure:

```
pokemon-app/
├── README.md
├── __tests__/                # Contains test files for the application
│   ├── unit/                # Unit tests for various parts of the app
│   │   ├── actions/         # Tests for actions
│   │   ├── components/      # Tests for components
│   │   ├── hooks/           # Tests for custom hooks
│   │   └── sections/        # Tests for sections
│   ├── __mockdata__/        # Mock data used in tests
├── src/                      # Main source code of the application
│   ├── actions/             # Contains action files for different pages
│   │   ├── HomePage.js      # Actions related to the Home Page
│   │   └── DetailsPage.js   # Actions related to the Details Page
│   ├── app/                 # Application-level files and configurations
│   │   ├── favourites/      # Favourites-related functionality
│   │   ├── fonts/           # Font assets
│   │   ├── pokemon/[id]/    # Dynamic routes for Pokémon details
│   │   ├── layout.tsx       # Layout component for the app
│   │   └── page.tsx         # Main page component
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # UI-specific components
│   │   ├── ...              # Additional components
│   │   └── ...              # Additional components
│   ├── constants/           # Application constants
│   │   ├── api.ts           # API-related constants
│   │   └── colors.ts        # Color-related constants
│   ├── hooks/               # Custom React hooks
│   │   ├── useFavouritesData.ts # Hook for managing favourites data
│   │   └── usePokemonData.ts    # Hook for fetching Pokémon data
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # General utility functions
│   ├── providers/           # Context providers for global state management
│   │   ├── FavouriteContextProvider.tsx # Context for favourites
│   │   ├── GlobalContextProvider.tsx    # Global context provider
│   │   └── ThemeProvider.tsx            # Theme provider
│   ├── sections/            # Sections of the app
│   │   ├── NavBar           # Navigation bar section
│   │   ├── PokemonList      # Pokémon list section
│   │   ├── PokemonDetails   # Pokémon details section
│   │   └── Favourites       # Favourites section
│   ├── types/               # Type definitions for TypeScript
│   │   ├── favourites.ts    # Types related to favourites
│   │   ├── global.ts        # Global types
│   │   ├── pagination.ts    # Pagination-related types
│   │   └── pokemon.ts       # Pokémon-related types
├── public/                  # Static assets served directly to the browser
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Dependency lock file
└── node_modules/            # Installed dependencies
```

This structure ensures a clean separation of concerns, making the project easy to navigate and maintain.

```
pokemon-app/
├── README.md
├── __tests__/
|   ├── unit/
|   |   ├── actions
|   |   ├── components
|   |   ├── hooks
|   |   └── sections
|   ├── __mockdata__/
├── src/
│   ├── actions/
│   │   ├── HomePage.js
│   │   └── DetailsPage.js
│   ├── app/
│   │   ├── favourites
│   │   ├── fonts
│   │   ├── pokemon/[id]
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui
│   │   ├── ...
│   │   └── ...
│   ├── constants/
│   │   ├── api.ts
│   │   └── colors.ts
│   ├── hooks/
│   │   ├── useFavouritesData.ts
│   │   └── usePokemonData.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── providers/
│   │   ├── FavouriteContextProvider.tsx
│   │   ├── GlobalContextProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── NavBar
│   │   ├── PokemonList
│   │   ├── PokemonDetails
│   │   └── Favourites
│   ├── types/
│   │   ├── favourites.ts
│   │   ├── global.ts
│   │   ├── pagination.ts
│   │   └── pokemon.ts
├── public/
├── package.json
├── package-lock.json
└── node_modules/
```

---

## Description of Files and Folders

### Root Directory

- **README.md**: This file provides an overview of the project, including its purpose, setup instructions, and file structure.
- **package.json**: Contains metadata about the project, including dependencies, scripts, and project configuration.
- **package-lock.json**: Automatically generated file that locks the versions of dependencies for consistent installs.
- **node_modules/**: Directory containing all installed dependencies. This folder is automatically generated when dependencies are installed.

### `src/` Directory

This folder contains the main source code for the application.

- **components/**: Contains reusable UI components.

  - **Header.js**: Component for the app's header, which typically includes navigation or branding.
  - **Footer.js**: Component for the app's footer, which may include copyright information or links.
  - **PokemonCard.js**: Component for displaying individual Pokémon details, such as name, image, and stats.

- **pages/**: Contains the main pages of the app.

  - **HomePage.js**: The landing page that lists Pokémon in a grid or list format.
  - **DetailsPage.js**: A detailed view of a selected Pokémon, showing additional information like abilities, type, and stats.

- **App.js**: The root component that defines the app's structure, including routing between pages.
- **index.js**: The entry point of the application that renders the app into the DOM.

### `public/` Directory

This folder contains static assets that are served directly to the browser.

- **index.html**: The main HTML file that serves as the entry point for the app. It includes the root `<div>` where the React app is mounted.
- **favicon.ico**: The app's favicon, displayed in the browser tab.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000` in your browser.

---

## Features

- **Pokémon Browsing**: View a list of Pokémon with their names and images.
- **Detailed Pokémon View**: Click on a Pokémon to see detailed information, including stats, abilities, and type.
- **Responsive Design**: Optimized for both mobile and desktop devices.

---
