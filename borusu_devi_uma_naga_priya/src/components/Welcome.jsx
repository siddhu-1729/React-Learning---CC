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