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

  makeRequest(apiType) {
    //  clear current repo array so we can see it update
    this.setState({
      repos: [],
    });

    const apiRequest = new Api();
    if (apiType === 'graph') {
      apiRequest.queryGraphAPI((res) => {
        this.setState({
          repos: res,
        });
      });
    } else if (apiType === 'rest') {
      apiRequest.queryRestAPI((res) => {
        this.setState({
          repos: res,
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Top Github Repositories </h2>
        </div>
        <p className="App-intro">
          This is a JS app built on React to query the top Github repositories using the Github v4 GraphQL API and/or the v3 REST API.
        </p>
        <button className="App-graph-query-button" onClick={() => this.makeRequest('graph')}>Query GraphQL API</button>
        <button className="App-rest-query-button" onClick={() => this.makeRequest('rest')}>Query REST API</button>
        <div className="App-body">
          <RepoList repo_list={this.state.repos} />
        </div>
        <div className="App-footer" />
      </div>
    );
  }
}
