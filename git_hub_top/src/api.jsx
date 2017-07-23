import React from 'react';
import request from 'request';
import Repo from './repo';

export default class Api {
  constructor() {
    this.graphUrl = process.env.REACT_APP_API_GRAPH_URL;
    this.restUrl = process.env.REACT_APP_API_REST_URL;
    this.token = process.env.REACT_APP_TOKEN;
    this.userAgent = process.env.REACT_APP_USER_AGENT;
    this.queryRestAPI = this.queryRestAPI.bind(this);
    this.queryGraphAPI = this.queryGraphAPI.bind(this);
  }

  queryRestAPI(callback) {
    const query = {};
    const search = 'repositories?q=stars:>=500';
    query.headers = ({
      Authorization: `token ${this.token}`,
      Accept: 'application/vnd.github.v3+json',
    });
    query.url = this.restUrl + search;
    query.body = '';
    this.getRequest(query, callback);
  }

  queryGraphAPI(callback) {
    const req = {};
    req.headers = ({
      'Content-type': 'application/json',
      Authorization: `bearer ${this.token}`,
      'User-Agent': this.userAgent,
    });
    req.url = this.graphUrl;
    req.body = {};
    req.body.query = `
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
            primaryLanguage{
                name
            }
            }
        }
        }
    }
    }
    `;
    req.body.query = req.body.query.replace(/\n/g, '');
    this.postRequest(req, callback);
  }

  getRequest(query, callback) {
    if (query.url === undefined || this.token === undefined || this.userAgent === undefined) {
      callback([]);
    } else {
      const req = {};
      req.url = query.url;
      req.headers = query.headers;
      req.body = JSON.stringify(query.body);

      // Should rewrite with Promises
      if (callback) {
        request.get(req, (error, response, responseBody) => {
          //  extract status code checking to its own function
          if (response.statusCode === 404) {
            callback([]);
          } else {
            Api.parseJSON(responseBody, callback);
          }
        });
      }
    }
  }

  postRequest(query, callback) {
    if (query.url === undefined || this.token === undefined || this.userAgent === undefined) {
      callback([]);
    } else {
      const req = {};
      req.url = query.url;
      req.headers = query.headers;
      req.body = JSON.stringify(query.body);

      //  Should rewrite with Promises
      if (callback) {
        request.post(req, (error, response, responseBody) => {
          //  extract status code checking to its own function
          if (response.statusCode === 404) {
            callback([]);
          } else {
            Api.parseJSON(responseBody, callback);
          }
        });
      }
    }
  }

  static parseJSON(res, callback) {
    const parsed = JSON.parse(res);
    if (parsed.data !== undefined) {
      Api.parseGraphJSON(parsed, callback);
    } else if (parsed.items !== undefined) {
      Api.parseRestJSON(parsed, callback);
    } else {
      callback([]);
    }
  }

  static parseRestJSON(res, callback) {
    const repoArray = Array(10).fill(null);
    for (let i = 0; i < 10; i += 1) {
      //  all this needs to be null checked.
      const node = res.items[i];
      let language = 'No primary language specified.';

      if (node.language != null) {
        language = node.language;
      }

      repoArray[i] = (<Repo
        key={i}
        count={node.stargazers_count}
        name={node.full_name}
        description={node.description}
        created={node.created_at}
        address={node.html_url}
        language={language}
      />);
    }

    callback(repoArray);
  }

  static parseGraphJSON(res, callback) {
    const repoArray = Array(10).fill(null);
    for (let i = 0; i < repoArray.length; i += 1) {
      //  all this needs to be null checked.
      const node = res.data.search.edges[i].node;
      let language = 'No primary language specified.';

      if (node.primaryLanguage != null) {
        language = node.primaryLanguage.name;
      }

      repoArray[i] = (<Repo
        key={i}
        count={node.stargazers.totalCount}
        name={node.nameWithOwner}
        description={node.description}
        created={node.createdAt}
        address={node.projectsUrl}
        language={language}
      />);
    }

    callback(repoArray);
  }
}
