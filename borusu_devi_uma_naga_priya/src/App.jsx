import "./App.css";

import Hello from "./components/Hello";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="container">
      <Hello />

      <hr />

      <FunctionComponent />

      <hr />

      <ClassComponent />
    </div>
  );
}

export default App;