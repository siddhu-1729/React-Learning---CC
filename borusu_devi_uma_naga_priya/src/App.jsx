import "./App.css";

import Hello from "./components/Hello";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import Welcome from "./components/Welcome";

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
    </div>
  );
}

export default App;