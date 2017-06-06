import React, { Component } from 'react';
import './App.css';
import ApiRequest from './ApiRequest.js'

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
        <ApiRequest/>
      </div>
    );
  }
}

export default App;
