import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Lenny',
    };
  }
  render() {
    return (
      <div className="app-container">
        <h1>Hello App</h1>
        <button>This is a button for {this.state.firstName}</button>
      </div>
    );
  }
}

export default App;
