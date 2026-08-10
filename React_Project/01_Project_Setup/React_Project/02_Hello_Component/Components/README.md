# React Components

## What is a Component?

A component is an independent and reusable block of code that returns JSX and represents a part of the user interface.

Examples:
- Navbar
- Header
- Footer
- Login Form
- Product Card

React applications are built by combining multiple components.

---

## Types of Components

There are two types of components:

### 1. Functional Component (Modern Way)

A functional component is simply a JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {
  return <h2>Welcome to React</h2>;
}

export default Welcome;
```

### Advantages

- Easy to write
- Easy to understand
- Supports Hooks
- Most commonly used in modern React

---

### 2. Class Component (Old Way)

A class component is created using JavaScript classes and extends React.Component.

Example:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome to React</h2>;
  }
}

export default Welcome;
```

### Advantages

- Used in older React projects
- Supports lifecycle methods

### Disadvantages

- More code
- Harder to understand
- Mostly replaced by Functional Components and Hooks

---

## Functional Component vs Class Component

| Functional Component | Class Component |
|----------------------|-----------------|
| JavaScript Function | JavaScript Class |
| Uses Hooks | Uses Lifecycle Methods |
| Less Code | More Code |
| Easy to Read | Slightly Complex |
| Recommended | Legacy Approach |

---

## Conclusion

Today, almost all React applications use Functional Components because they are simple, readable, and support Hooks.
Today, almost all React applications use Functional Components because they are simple, readable, and support Hooks.
