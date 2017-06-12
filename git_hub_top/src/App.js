import React, { Component } from 'react';
import './App.css';
import Api from './Api.js'
import RepoList, { Repo } from './Repo.js';

export default class App extends Component {
    constructor() {
    super();
    this.state = {
      //mock data for designing
        repos: Array(1).fill( <Repo
                                key="0" 
                                count="0" 
                                name="rbillingsley/GitHubTop" 
                                created="06/06/2017" 
                                description="A JS app built on React that queries the top Github repositories using the Github v4 GraphQL API." 
                                address="https://github.com/rbillingsley/GitHubTop" 
                                language="JavaScript"/>
                                )
    };   
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var apiRequest = new Api();
    apiRequest.queryAPI( (res) => {
      console.log("api result");
      console.log(res);
      this.setState( {
        repos: res
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
        <button className="App-query-button" onClick={this.handleClick}>Query API</button>
        <RepoList repo_list={this.state.repos}/>
      </div>
    );
  }
}
