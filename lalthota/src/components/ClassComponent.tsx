import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="card">
        <span className="badge">Class Component</span>

        <h2 style={{ marginTop: 10 }}>
          This is a Class Component
        </h2>

        <p className="muted">
          Classic React component structure with a modern card surface.
        </p>
      </div>
    );
  }
}

export default ClassComponent;