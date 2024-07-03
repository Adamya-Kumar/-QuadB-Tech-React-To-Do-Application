#QuadB-Tech-React-To-Do-Application
---

## Simple React To-Do Application

This is a simple To-Do application built with React and Redux. The application allows users to add, view, edit, and delete tasks. It demonstrates the use of functional components, React hooks, and Redux for state management.

## Features

- Add a new task
- View the list of tasks
- Edit an existing task
- Delete a task

## Bonus Features (Optional)

- Mark tasks as completed
- Persistent storage using local storage

## Project Structure

```
my-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskItem.js
│   │   └── TaskList.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── App.js
│   ├── index.css
│   └── index.js
└── package.json
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-todo-app.git
   cd my-todo-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm start
```

This will start the application at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```

This will create an optimized build in the `build` directory.

## Dependencies

Here are the key dependencies used in this project:

- React: A JavaScript library for building user interfaces
- Redux: A predictable state container for JavaScript apps
- React-Redux: Official React bindings for Redux

You can install these dependencies with npm:

```bash
npm install react react-dom redux react-redux
```

## Folder Structure and Components

### src/redux/store.js
Sets up the Redux store.

### src/redux/reducers.js
Contains the root reducer for managing the application's state.

### src/redux/actions.js
Defines action creators for adding, editing, and deleting tasks.

### src/components/TaskInput.js
A component for adding new tasks.

### src/components/TaskItem.js
A component for displaying and managing individual tasks (edit and delete functionality).

### src/components/TaskList.js
A component for displaying the list of tasks.

### src/App.js
The main application component.

### src/index.js
The entry point of the application, which sets up the Redux provider and renders the App component.

### src/index.css
Basic CSS styling for the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Create React App](https://create-react-app.dev/)


