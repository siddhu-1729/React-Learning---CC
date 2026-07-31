import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../store/store";

import {
  increment,
  decrement,
  reset,
} from "../store/counterSlice";

function ReduxCounter() {
  const count = useSelector(
    (state: RootState) =>
      state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div className="card metric">
      <span className="badge">Redux State</span>

      <h2 style={{ marginTop: 10 }}>Redux Counter</h2>

      <div className="metric-value">{count}</div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>

        <button className="btn-secondary" onClick={() => dispatch(decrement())}>
          -
        </button>

        <button className="btn-ghost" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ReduxCounter;