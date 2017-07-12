import React from 'react';
import request from 'request';
import Repo from './repo';

export default class Api {
  constructor() {
    this.url = process.env.REACT_APP_API_URL;
    this.token = process.env.REACT_APP_TOKEN;
    this.userAgent = process.env.REACT_APP_USER_AGENT;
  }

  queryAPI(callback) {
    this.makeRequest(`
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
    `, callback);
  }

  makeRequest(graphRequest, callback) {
    if (this.url === undefined || this.token === undefined || this.userAgent === undefined) {
      callback([]);
    } else {
      const req = {};
      req.url = this.url;
      const headers = ({
        'Content-type': 'application/json',
        Authorization: `bearer ${this.token}`,
        'User-Agent': this.userAgent,
      });
      req.headers = headers;
      const body = {};
      body.query = graphRequest.replace(/\n/g, '');
      req.body = JSON.stringify(body);
      if (callback) {
        request.post(req, (error, response, responseBody) => {
          Api.parseJSON(responseBody, callback);
        });
      }
    }
  }

  static parseJSON(res, callback) {
    const parsed = JSON.parse(res);
    const repoArray = Array(10).fill(null);
    for (let i = 0; i < repoArray.length; i += 1) {
      // all this needs to be null checked.

      const node = parsed.data.search.edges[i].node;
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
