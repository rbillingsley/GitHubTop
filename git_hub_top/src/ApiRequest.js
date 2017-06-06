import React, { Component } from 'react';
import Api from './Api.js';
import Repo from './Repo.js';
import RepoElement from './RepoElement.js';

class ApiRequest extends Component {
  constructor() {
    super();
    this.state = {
        response: "None",
        data: null,
    };

    this.repos = Array(10).fill(new Repo());

    this.repo = new Repo(1, "test", "description", "now", "here");
  }

  queryAPI() {
    var github = new Api();

    github.query(`
    query{
    search(query:"stars:>1" type:REPOSITORY first:10){
        edges {
        node{
            ... on Repository {
            stargazers{
                totalCount
            }
            nameWithOwner
            description
            createdAt
            projectsUrl
            }
        }
        }
    }
    }
    `, null, (res, err) => {
        var parsed = JSON.parse(res)
        this.setState( {
            data: parsed,
            response: JSON.stringify(parsed)
        });
    });
  }

  parseJSON() {

    //for(var i = 0; i < raw_repos.length())
  }

  renderRepo(i){
    return (
        <RepoElement 
            value={this.repos[i]}
        />
    );
  }

  renderRepoArray() {
    var repos;
    for(var i = 0; i < 10; i++)
    {
        repos += this.renderRepo(i);
    }

    return repos;
  }

  render() {
    return (
        <div>
            {}
            {this.parseJSON()}
            <p>
           
            </p>
            <RepoElement 
            value={this.repo}
            />
        </div>
    );
  }
}

export default ApiRequest;