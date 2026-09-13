# 🚀 DevStack - Tech Stack Builder

DevStack is a responsive single-page web application designed for developers to explore, compare, and assemble their ideal technology stack for modern projects.

---

## ✨ Features
1. **Interactive Tech Explorer:** Browse through frontend, backend, database, and tooling options with a card-based grid system.
2. **Stack Management:** Easily add or remove technologies to your custom stack with dynamic UI states and visual indicators.
3. **Instant Feedback System:** Get real-time toast notifications powered by `react-toastify` whenever you update your stack.

---

## ⚙️ Technologies Used
- **React.js (TypeScript):** Core library for building the user interface.
- **Tailwind CSS & DaisyUI:** For modern, responsive styling and pre-built UI components.
- **Vite:** Next-generation frontend build tool.
- **React-Toastify:** For clean and customizable notification alerts.
- **JSON:** Local data source for technology items handled via `Suspense` and `Promises`.

---

## 📝 React Concept Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript. It allows us to write HTML-like markup directly inside our JavaScript/TypeScript files, making UI code much more readable, structured, and easier to maintain.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component. They are immutable within the child.
- **State:** Internal data managed within a component. It can change over time based on user actions, triggering re-renders to update the UI.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is a React Hook that lets functional components manage state. In this project, it is used to keep track of the user's selected technology stack items (adding/removing technologies).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React components, such as data fetching, subscriptions, or DOM manipulations. It is used to fetch and load the local `technologies.json` data asynchronously when the component mounts.

### 5. Why does every item in a .map() list need a unique key prop?
Keys help React efficiently identify which items in a list have changed, been updated, or been removed. This optimizes rendering performance and prevents UI bugs or incorrect state mapping.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is the process of displaying different UI elements or components based on specific conditions (using ternary operators or logical `&&`). 
* *Example:* Displaying an "Your stack is empty" message when no technologies are selected, and showing the technology cards once items are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed down through attributes called **props** (e.g., `<ChildComponent data={techData} />`).
- **Child to Parent:** The parent passes a **callback function** down as a prop to the child. The child invokes this function, passing data back up as arguments.
