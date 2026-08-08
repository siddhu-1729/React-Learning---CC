import Hello from "./Hello";
import Product from "./Product";

function App() {
  return (
    <>
      <Hello />

      <Product
        name="Laptop"
        price={65000}
        brand="Dell"
      />
    </>
  );
}

export default App;