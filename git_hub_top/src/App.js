import React, { Component } from 'react';
import './App.css';
import config from './config.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Top Github Repos </h2>
        </div>
        <p className="App-intro">
          This is a JS app built on react to query the top Github repos using the Github v4 GraphQL API.
        </p>
      </div>
    );
  }
}

export default App;
