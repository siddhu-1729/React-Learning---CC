# Props in React

## What are Props?

Props (Properties) are used to pass data from a parent component to a child component.

Props are read-only, which means the child component cannot modify them.

---

## Parent Component

```jsx
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Nikshitha" age={20} />
    </div>
  );
}

export default App;
```

## Child Component

```jsx
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;
```

---

## Output

Name: Nikshitha

Age: 20

---

## Why do we use Props?

- Pass data from parent to child
- Make components reusable
- Display dynamic data
- Improve code organization

---

## Key Points

- Props stand for Properties.
- Data flows only from Parent to Child.
- Props are immutable (read-only).
- Props can store strings, numbers, arrays, objects, and functions.

---

## Advantages

- Reusable Components
- Better Code Structure
- Dynamic UI
- Easy Data Sharing
