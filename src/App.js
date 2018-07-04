// Dev disclaimer:
// I have not used React before so the majority of the 3 hour limit was spent researching how to use it correctly
// As a next step was looking at pagination packages `react-js-pagination` & `react-paginate` though did not have enough time to link them up to the results.
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
    // Bind events required so that we can continue typing in input field
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Make call to Test API using input value as query param
  getData = async () => {
    const url = `https://help-search-api-prod.herokuapp.com/search?query=${this.state.value}`;
    const response = await fetch(url);
    const json = await response.json();
    // Save results to this.state
    this.setState({
      results: json.results,
    });
  }

  // Set input value on this.state on the onChange event
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  // When we submit the form call getData function which will call the API, preventDefault as to not submit the form & prevent page reloading
  handleSubmit(event) {
    this.getData();
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sky Help Unattended Test</h1>
        </header>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
          </div>
          <input className="btn btn-primary btn-sm mb-2" type="submit" value="Submit" />
        </form>
        <div className="l-results">
          {
            // Loop on results
            Object.keys(this.state.results).map((i) => (
              <div className="b-result" key={i}>
                <a className="b-result__title" href={this.state.results[i].url} target="_blank" rel="noopener">
                  {this.state.results[i].title}
                </a>
                <span className="b-result__description">
                  {this.state.results[i].description}
                </span>
                <a className="btn btn-primary btn-sm b-result__btn" href={this.state.results[i].url} target="_blank" rel="noopener">
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
