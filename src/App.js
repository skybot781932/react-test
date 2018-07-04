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
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
