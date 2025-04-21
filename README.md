# Pokémon App

This is a Pokémon App project that allows users to browse Pokémons. The App allows users to add favourite and read additional details of Pokemon. The App is responsive and accessible. From the technical point of view, it is developed in a way it is easy to scale, following the SOLID principles.

Below is a comprehensive overview of the project, including the file structure, descriptions of each file and folder, and detailed instructions for setup and usage.

---

## Table of Contents

1. [File Structure](#file-structure)
2. [Description of Files and Folders](#description-of-files-and-folders)
   - [Root Directory](#root-directory)
   - [`src/` Directory](#src-directory)
   - [`public/` Directory](#public-directory)
   - [`__tests__/` Directory](#__tests__-directory)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
4. [Tech Stack](#tech-stack)
   - [Details](#details)
   - [Dependencies](#dependencies)
   - [Dev Dependencies](#dev-dependencies)
5. [Features](#features)
6. [Functional and Technical Requirements](#functional-and-technical-requirements)

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
│   │   ├── get-pokemons.js  # Contains function to get pokemon list data
│   │   └── get-pokemons-by-id.js # Contains function to get pokemon details by respective id
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
└── jest.config.ts           # Unit test configuration
└── jest.setup.ts            # Unit test setup
└── tailwind.config.ts       # tailwind configuration
└── tsconfig.json            # typescript configuration
└── next.config.mjs          # nextjs configuration
```

This structure ensures a clean separation of concerns, making the project easy to navigate and maintain.

## Description of Files and Folders

### Root Directory

- **README.md**: Provides an overview of the project, including its purpose, setup instructions, and file structure.
- **package.json**: Contains metadata about the project, such as dependencies, scripts, and configuration.
- **package-lock.json**: Locks the versions of dependencies to ensure consistent installations across environments.
- **node_modules/**: Automatically generated folder containing all installed dependencies.
- **jest.config.ts**: Configuration file for Jest, the testing framework.
- **jest.setup.ts**: Setup file for Jest to configure the testing environment.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.mjs**: Configuration file for the Next.js framework.

### `src/` Directory

This folder contains the main source code for the application, organized into subdirectories for better modularity and maintainability.

- **actions/**: Contains functions for fetching Pokémon data.

  - **get-pokemons.js**: Fetches the list of Pokémon.
  - **get-pokemons-by-id.js**: Fetches details of a specific Pokémon by its ID.

- **app/**: Contains application-level files and configurations.

  - **favourites/**: Manages functionality related to Pokémon favourites.
  - **fonts/**: Stores font assets used in the app.
  - **pokemon/[id]/**: Dynamic route for displaying Pokémon details.
  - **layout.tsx**: Defines the layout structure of the app.
  - **page.tsx**: Main page component.

- **components/**: Houses reusable UI components.

  - **ui/**: Contains UI-specific components, such as buttons and cards.
  - **/**: Contains other atomic components which are used as building blocks for sections.

- **constants/**: Stores application-wide constants.

  - **api.ts**: API endpoint related constants.
  - **colors.ts**: Color palette constants for mapping type of pokemon.

- **hooks/**: Custom React hooks for managing state and fetching data.

  - **useFavouritesData.ts**: Manages favourites-related data.
  - **usePokemonData.ts**: Manages Pokémon List and details data.

- **lib/**: Utility functions for common operations.

  - **utils.ts**: General-purpose utility functions.

- **providers/**: Context providers for global state management.

  - **FavouriteContextProvider.tsx**: Context for managing favourites.
  - **GlobalContextProvider.tsx**: Provides global state across the app.
  - **ThemeProvider.tsx**: Manages theming for the app.

- **sections/**: Contains sections of the app, each representing a specific feature or page.

  - **NavBar/**: Navigation bar section.
  - **PokemonList/**: Section displaying a list of Pokémon.
  - **PokemonDetails/**: Section for detailed Pokémon information.
  - **Favourites/**: Section for displaying favourite Pokémons.

- **types/**: TypeScript type definitions for the app.
  - **favourites.ts**: Types related to favourites.
  - **global.ts**: Global type definitions.
  - **pagination.ts**: Types for pagination functionality.
  - **pokemon.ts**: Types related to Pokémon data.

### `public/` Directory

This folder contains static assets served directly to the browser.

Logos and images in .png format is stored.

### `__tests__/` Directory

This folder contains all unit tests and its associated mockdatas.

The `unit` folder contains all the test suites, with folders namely components, hooks, sections, actions containing respective unit tests for the functions and components.

The `__mockdata__` folder contains mock values for unit tests to make use of.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nithkish/pokemon-app.git
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

For local devlepment, run:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` in your browser.

### Running Tests in the App

To run the whole test suite run:

```bash
npm run test
```

## Tech Stack

### Details

create-next-app is used to generate this app, with Typescript for writing codes, tailwind for styling along with shadcn reusable components. Shadcn uses radix-ui.

For state management Reacts ContextAPI has been used.

LocalStorage have been made use of along with other libraries.The Pokémon App leverages the following libraries and frameworks:

### Dependencies

- **@radix-ui/react-progress**: ^1.1.4
- **@radix-ui/react-slot**: ^1.2.0
- **axios**: ^1.8.4
- **class-variance-authority**: ^0.7.1
- **clsx**: ^2.1.1
- **lodash**: ^4.17.21
- **lucide-react**: ^0.488.0
- **next**: 14.2.25
- **next-themes**: ^0.4.6
- **react**: ^18
- **react-dom**: ^18
- **tailwind-merge**: ^3.2.0
- **tailwindcss-animate**: ^1.0.7

### Dev Dependencies

- **@testing-library/dom**: ^10.4.0
- **@testing-library/jest-dom**: ^6.6.3
- **@testing-library/react**: ^16.3.0
- **@types/jest**: ^29.5.14
- **@types/lodash**: ^4.17.16
- **@types/node**: ^20
- **@types/react**: ^18
- **@types/react-dom**: ^18
- **jest**: ^29.7.0
- **jest-environment-jsdom**: ^29.7.0
- **postcss**: ^8
- **tailwindcss**: ^3.4.1
- **ts-node**: ^10.9.2
- **typescript**: ^5

## Features

- **Pokémon Browsing**: View a list of Pokémon with their names and images. The list is pageinated, with the current page displayed at the botton along with navigation buttons to next and previous pages, as shown below.

![Home Page](<docs/screenshots/Screenshot 2025-04-21 at 14.04.47.png>)

- **Detailed Pokémon View**: Click on a Pokémon to see detailed information, including stats, abilities, and type. Clicking on the heart icon will add the Pokemon into the favourite list, clicking on it again will remove it from favourites. you can move to the home page, by clicking on "Home" button or "Pokemon" logo on top navigation.

![Detailed Pokémon View](<docs/screenshots/Screenshot 2025-04-21 at 14.05.27.png>)

- **Favourites Page**: Click on the "Favourites" button on top navigation will navigate to the favourites list page, where you can see all the pokemons added as favourites. On clicking the Pokemon card, you can see the details of them as well, and remove from favourite list and vice versa.

![Favourite Page](<docs/screenshots/Screenshot 2025-04-21 at 14.19.14.png>)

if there are no favourites added there will be a placeholder page as shown below.

![No Favourites](<docs/screenshots/Screenshot 2025-04-21 at 14.05.48.png>)

- **Dark/Light Mode**: For better accessibilty and user experience, there is button to toggle between dark and light mode on the top navigation bar. Shown below all pages in dark mode.

![Home](<docs/screenshots/Screenshot 2025-04-21 at 14.05.01.png>)

![Details](<docs/screenshots/Screenshot 2025-04-21 at 14.05.17.png>)

![Favourites](<docs/screenshots/Screenshot 2025-04-21 at 14.19.23.png>)

![No Favourites](<docs/screenshots/Screenshot 2025-04-21 at 14.20.19.png>)

- **Responsive Design**: Optimized for both mobile and desktop devices. Below are samples of all pages in mobile mode.

![Mobile Home](<docs/screenshots/Screenshot 2025-04-21 at 14.41.25.png>)

![mobile details-1](<docs/screenshots/Screenshot 2025-04-21 at 14.43.01.png>)

![mobile details-2](<docs/screenshots/Screenshot 2025-04-21 at 14.43.11.png>)

![no favourites mobile](<docs/screenshots/Screenshot 2025-04-21 at 14.43.28.png>)

![favourites mobile](<docs/screenshots/Screenshot 2025-04-21 at 14.43.59.png>)

## Functional and Technical Requirements

### Functional requirements - Accomplished:

- [x] The user should be able to see a main screen with a list of all Pokémons (with corresponding name and image for each of them).
- [x] In the main page: apply pagination in the list of Pokémons.
- [x] From the main page, while clicking a Pokémon, the user should be able to navigate to another page containing the details of that Pokémon.
- [x] In the Pokémon details page, the user should see at least 6 descriptions, the image and the name of one Pokémon.
- [x] In the Pokémon detail page, the user should be able to favorite the Pokémon.
- [x] From the main page, the user should be able to navigate to another page. This page should contain a list of the favorite Pokémons (with corresponding name and image for each of them).

### Technical requiremnts - Accomplished

- [x] The application should be implemented in React.
- [x] To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see documentation for more details).
- [x] Usage of the local storage to handle the list of favorite Pokémons.
- [x] Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI).
- [x] The app should be responsive (adapt UI so it can be displayed in different screen sizes).
- [x] The code should contain comments.
- [x] The application code should be submitted in GitHub.
- [x] On the README file of GitHub, should be mentioned the following information: small description of the application, functional and technical requirements accomplished,technologies used, and the steps of installation.

## Future improvements

1. Adding a search bar for searching Pokemon will improve UX.
2. Adding an options to delete favourites in the favourites list.
3. Infinite scrolling in place of pagination for better user experience.
4. Migration to state mangement tools like Redux or Zustand during scale up phase.
5. DB for storing the favourites list and respective APIs for consumption.

---
