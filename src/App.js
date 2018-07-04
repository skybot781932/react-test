import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      region: 'uk'
    };
  }

  componentWillMount() {
    // this will run before your component is mounted
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">help-tech-test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
