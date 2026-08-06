import Hello from "../components/Hello";
import FunctionComponent from "../components/FunctionComponent";
import ClassComponent from "../components/ClassComponent";

function ComponentsPage() {
  return (
    <div>
      <h1>Components</h1>

      <Hello />

      <hr />

      <FunctionComponent />

      <hr />

      <ClassComponent />
    </div>
  );
}

export default ComponentsPage;