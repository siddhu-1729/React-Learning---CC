# Hello Component

## What is a Component?

A component is a reusable piece of UI in React. It helps us divide the application into small, independent parts.

## Hello Component

A Hello Component is the simplest React component. It displays a simple message on the screen.

### Example

```jsx
function Hello() {
  return <h1>Hello React!</h1>;
}

export default Hello;
```

### Usage

```jsx
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```

## Output

Hello React!

## Advantages

- Easy to understand
- Reusable
- Makes UI modular
- First step in learning React
