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