import React, { Component } from 'react';
import './app.css';
import Api from './api';
import RepoList from './repoList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
    };
    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount() {
    // Automatically request data from api once component has mounted.
    this.makeRequest();
  }

  makeRequest() {
    const apiRequest = new Api();
    apiRequest.queryAPI((res) => {
      this.setState({
        repos: res,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Top Github Repositories </h2>
        </div>
        <p className="App-intro">
          This is a JS app built on React to query the top Github repositories using the Github v4 GraphQL API.
        </p>
        <button className="App-query-button" onClick={this.makeRequest}>Query API</button>
        <div className="App-body">
          <RepoList repo_list={this.state.repos} />
        </div>
        <div className="App-footer" />
      </div>
    );
  }
}
