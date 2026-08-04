# Step 1 - Creating a Basic Hello Component

## Objective

Learn how to create and use a React component.

## Hello Component

A React component is a reusable piece of the user interface.

### Hello.jsx

```jsx
function Hello() {
  return (
    <div>
      <h1>Hello Priya 👋</h1>
      <p>Welcome to React Learning.</p>
    </div>
  );
}

export default Hello;
```

### App.jsx

The `Hello` component is imported and rendered inside `App.jsx`.

## Output

Hello Priya 👋

Welcome to React Learning.

## Concepts Learned

- Components
- Import and Export
- JSX
- Rendering Components

# Step 2 - Components and Their Types

## Objective

Learn about React components and the two types of components:
- Function Component
- Class Component (Old Way)

## Function Component

A Function Component is a JavaScript function that returns JSX. It is the modern and recommended way to create React components.

### FunctionComponent.jsx

```jsx
function FunctionComponent() {
  return (
    <div>
      <h2>Function Component</h2>
      <p>A Function Component is a JavaScript function that returns JSX.</p>
      <p>It is simple, reusable, and recommended for modern React applications.</p>
    </div>
  );
}

export default FunctionComponent;
```

## Class Component

A Class Component is an ES6 class that extends `React.Component` and returns JSX using the `render()` method. It was commonly used before React Hooks.

### ClassComponent.jsx

```jsx
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>A Class Component is an ES6 class that extends React.Component.</p>
        <p>It uses the render() method to return JSX.</p>
      </div>
    );
  }
}

export default ClassComponent;
```

## App.jsx

The `FunctionComponent` and `ClassComponent` are imported and rendered inside `App.jsx` along with the `Hello` component.

## Output

Hello Priya 👋

Welcome to React Learning.

---

Function Component

A Function Component is a JavaScript function that returns JSX.

It is simple, reusable, and recommended for modern React applications.

---

Class Component

A Class Component is an ES6 class that extends React.Component.

It uses the render() method to return JSX.

## Difference Between Function and Class Components

| Function Component | Class Component |
|--------------------|-----------------|
| JavaScript function | ES6 class |
| Returns JSX directly | Returns JSX using `render()` |
| Supports Hooks | Uses lifecycle methods |
| Less code | More code |
| Recommended for modern React | Used in older React applications |

## Concepts Learned

- React Components
- Function Components
- Class Components
- JSX
- Import and Export
- Component Reusability
- Difference between Function and Class Components
# Step 3 - Props (Parent to Child Communication)

## Objective

Learn how to pass data from a parent component to a child component using Props.

## What are Props?

Props (Properties) are used to pass data from a parent component to a child component. Props are read-only and help make components reusable.

### Welcome.jsx

```jsx
function Welcome(props) {
  return (
    <div>
      <h2>Props Example</h2>
      <p>Hello, {props.name}!</p>
      <p>Welcome to {props.course}.</p>
    </div>
  );
}

export default Welcome;
```

## App.jsx

```jsx
<Welcome
  name="Priya"
  course="React Learning"
/>
```

## Output

Props Example

Hello, Priya!

Welcome to React Learning.

## Concepts Learned

- Props
- Parent Component
- Child Component
- Passing Data
- Reusable Components
# Step 4 - State Management using useState

## Objective

Learn how to manage and update data inside a React component using the `useState` Hook.

## Task 1 - Name Changer

A user enters a name in the input field. The value is stored in state and displayed dynamically on the screen.

### Concepts Learned

- useState Hook
- Input Handling
- Event Handling (`onChange`)
- Dynamic UI Updates

---

## Task 2 - Counter

A counter application that increments, decrements, and resets the count using state.

### Concepts Learned

- useState Hook
- State Updates
- Event Handling (`onClick`)
- Component Re-rendering

## Overall Concepts Learned

- React State
- useState Hook
- Controlled Components
- Event Handling
- Dynamic Rendering