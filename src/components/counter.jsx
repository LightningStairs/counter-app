import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
