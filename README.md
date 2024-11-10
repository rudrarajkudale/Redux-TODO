# Todo App using Redux

## Overview
This is a Todo application built using **React** and **Redux** for state management. The app allows users to add, delete, and mark tasks as completed.

## Features
- **Task Management**: Add, delete, and mark tasks as completed.
- **Responsive Design**: The app is fully responsive, providing an optimized experience for both desktop and mobile devices.

## Tech Stack
- **React**: Frontend UI framework.
- **Redux**: State management for global state handling. Used reducers and store, along with the `useSelector` and `useDispatch` hooks.

## How to Use
1. Add a task by entering text in the input field and clicking the "Add Task" button.
2. Mark a task as complete by clicking the "Mark as Done" button.
3. Remove a task by clicking the "Delete" button.
4. Use "Mark All as Done" to mark all tasks as completed and "Delete All" to remove all tasks. These actions will affect all tasks in the list.

## Redux Flow
- **Actions**: `addTask`, `removeTask`, `markTaskDone`
- **Reducers**: Managed inside the `todoSlice.js` file to update the tasks array in the Redux store.
- **Store**: The `store.js` file contains the Redux store, which provides global state management for the app.

## Responsive Design
The app is fully responsive and works seamlessly on both mobile and desktop screens. On mobile devices, the layout adapts to provide a user-friendly experience with vertical alignment for tasks and buttons.
