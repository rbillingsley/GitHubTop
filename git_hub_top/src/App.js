import React, { Component } from 'react';
import './App.css';
import Api from './Api.js'
import Repo from './Repo.js';

export default class App extends Component {
    constructor() {
    super();
    this.state = {
      //mock data for designing
        repos: Array(1).fill( <Repo count="0 :(" name="rbillingsley/GitHubTop" created="06/06/2017" description="A JS app built on React that queries the top Github repositories using the Github v4 GraphQL API." address="https://github.com/rbillingsley/GitHubTop"/>)
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

//this.state.repos causes a warning, so a better way of rendering a dynamic array of jsx elements
  renderRepos() {
    console.log("Rendering repo list");
    this.state.repos.forEach(function(element) {
        return element;
    }, this);
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
        <button onClick={this.handleClick}>Query API!</button>
        {this.state.repos}
      </div>
    );
  }
}
