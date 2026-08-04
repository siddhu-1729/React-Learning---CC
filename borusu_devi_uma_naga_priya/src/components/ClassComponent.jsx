import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>

        <p>
          A Class Component is an ES6 class that extends React.Component.
        </p>

        <p>
          It uses the render() method to return JSX and was commonly used before Hooks.
        </p>
      </div>
    );
  }
}

export default ClassComponent;