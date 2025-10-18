# Easy Tasks

A simple task manager application built with **Angular**.

## :rocket: Technologies

- [Angular](https://angular.io/) (version 20.3.6)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

---

## :package: Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) (recommended: >= 18)
- [Angular CLI](https://angular.io/cli)

---

## :gear: Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/joscavalcantesn/angular-course.git
cd angular-course/easy-tasks
npm install
```

## :arrow_forward: Running the project

Start the development server:

```bash
npm start
```

Then open: http://localhost:4200

## :file_folder: Project structure

```
easy-tasks/
 ├── public/                 # Public assets (favicon, logo, etc.)
 ├── src/
 │   ├── app/
 │   │   ├── header/         # Header component
 │   │   │   ├── header.ts
 │   │   │   └── header.scss
 │   │   ├── user/           # User component
 │   │   │   ├── user.ts
 │   │   │   └── user.scss
 │   │   ├── app.config.ts   # Application configuration
 │   │   ├── app.routes.ts   # Application routes
 │   │   ├── app.scss        # Root styles
 │   │   ├── app.ts          # Root component
 │   │   └── dummy-users.ts  # Mock user data
 │   ├── index.html          # Main entry HTML
 │   ├── main.ts             # Application bootstrap
 │   └── styles.scss         # Global styles
 ├── package.json
 ├── package-lock.json
 ├── tsconfig.json
 ├── tsconfig.app.json
 ├── angular.json
 └── README.md
```
