# Easy Tasks

A simple and modern task manager application built with **Angular 20** featuring real-time state management with signals and local storage persistence.

## :rocket: Technologies

- [Angular](https://angular.io/) 20.3.6
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- Angular Signals for reactive state management
- LocalStorage API for data persistence

---

## :package: Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [Angular CLI](https://angular.io/cli)

---

## :gear: Installation

```bash
git clone https://github.com/joscavalcantesn/angular-course.git
cd angular-course/easy-tasks
npm install
```

## :arrow_forward: Running

```bash
npm start
```

Access: http://localhost:4200

---

## :sparkles: Features

- **User Selection**: Browse and select users to view their tasks
- **Task Management**: Add, view, and complete tasks per user
- **Local Persistence**: Tasks are automatically saved to browser storage
- **Reactive UI**: Built with Angular signals for optimal performance
- **Responsive Design**: Mobile-first approach with desktop optimization

---

## :file_folder: Project Structure

```
easy-tasks/
├── public/
│   ├── favicon.ico
│   ├── task-management-logo.png
│   └── users/                    # User avatar images
├── src/
│   ├── app/
│   │   ├── header/               # App header component
│   │   ├── shared/
│   │   │   └── card/             # Reusable card wrapper
│   │   ├── tasks/
│   │   │   ├── new-task/         # Task creation modal
│   │   │   ├── task/             # Individual task display
│   │   │   │   └── mock/         # Initial task data
│   │   │   ├── tasks.service.ts  # Centralized task state
│   │   │   └── tasks.ts          # Task list container
│   │   ├── user/
│   │   │   ├── mock/             # User mock data
│   │   │   └── user.ts           # User card component
│   │   ├── app.config.ts
│   │   ├── app.scss
│   │   └── app.ts                # Root component
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## :building_construction: Architecture

### State Management

- **TasksService**: Injectable singleton managing task state with Angular signals
- **Signal-based reactivity**: Automatic UI updates on data changes
- **Computed signals**: Efficient filtered task lists per user

### Data Flow

1. User selection triggers task filtering via computed signals
2. Task operations (add/remove) update the central signal
3. Changes automatically persist to localStorage
4. UI reactively updates without manual subscriptions

---

## :art: Design System

- **Color Palette**: Purple gradient theme with dark mode aesthetics
- **Typography**: Poppins font family
- **Layout**: CSS Grid and Flexbox for responsive design
- **Components**: Modular SCSS with scoped styles

---

## :memo: License

This project is part of the [Angular Course](https://github.com/joscavalcantesn/angular-course) repository.
