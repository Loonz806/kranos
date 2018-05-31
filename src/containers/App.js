import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "kranos"
    };
  }
  render() {
    return (
      <div className="app-container">
        <h1>Hello {this.state.projectName}</h1>
      </div>
    );
  }
}

export default App;
