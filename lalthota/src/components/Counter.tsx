import useCounter from "../hooks/useCounter";

function Counter() {
  const {
    count,
    increment,
    decrement,
    reset,
  } = useCounter();

  return (
    <div className="card metric">
      <span className="badge">Interactive Counter</span>

      <h2 style={{ marginTop: 10 }}>Counter</h2>

      <div className="metric-value">{count}</div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="btn" onClick={increment}>
          Increment
        </button>

        <button className="btn" onClick={decrement}>
          Decrement
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
