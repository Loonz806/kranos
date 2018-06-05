import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "Kranos"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      projectName: this.state.value
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1 id="greeting">Hello {this.state.projectName}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input
              id="name"
              className="name-field"
              type="text"
              placeholder="enter value"
              value={this.state.value || ""}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="update" id="submit" />
        </form>
      </div>
    );
  }
}

export default App;
