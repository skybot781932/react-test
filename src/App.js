import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      results: [],
      region: 'uk'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData = async () => {
    const url = `https://help-search-api-prod.herokuapp.com/search?query=${this.state.value}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    this.setState({
      results: json.results,
    });
  }

  componentWillMount() {
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.getData();
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">help-tech-test</h1>
        </header>
        <form className="e-form" onSubmit={this.handleSubmit}>
          <input type="text" className="e-input" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
          <input className="e-btn" type="submit" value="Submit" />
        </form>
        <div className="l-results">
          {
            Object.keys(this.state.results).map((i) => (
              <div className="b-result" key={i}>
                <a className="b-result__title" href={this.state.results[i].url}>
                  {this.state.results[i].title}
                </a>
                <span className="b-result__description">
                  {this.state.results[i].description}
                </span>
                <a className="btn btn-primary btn-sm b-result__btn" href={this.state.results[i].url}>
                  Read more
                </a>
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
