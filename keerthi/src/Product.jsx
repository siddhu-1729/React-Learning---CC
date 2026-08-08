function Product({ name, price, brand }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {name}</p>
      <p>Price: ₹{price}</p>
      <p>Brand: {brand}</p>
    </div>
  );
}

export default Product;