import "./App.css";

import Hello from "./components/Hello";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import Welcome from "./components/Welcome";
import NameChanger from "./components/NameChanger";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container">
      <Hello />

      <hr />

      <FunctionComponent />

      <hr />

      <ClassComponent />

      <hr />

      <Welcome
        name="Priya"
        course="React Learning"
      />

      <hr />

      <NameChanger />

      <hr />

      <Counter />
    </div>
  );
}

export default App;