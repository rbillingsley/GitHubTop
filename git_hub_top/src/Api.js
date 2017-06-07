import React from 'react';
import request from 'request';

import config from './config.js';
import Repo from './Repo.js';

export default class Api{
  constructor() {
    this.url = 'https://api.github.com/graphql'
    this.token = config.token;
    this.userAgent = 'github-graphql-test'
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
            }
        }
        }
    }
    }
    `, callback);
  }

  makeRequest(graphRequest, callback) {
        const req = {};
        req.url = this.url;
        var headers = ({
            'Content-type': 'application/json',
            'Authorization': 'bearer ' + this.token,
            'User-Agent': this.userAgent
        });
        req.headers = headers;
        var body = {};
        body.query = graphRequest.replace(/\n/g, '');
        req.body = JSON.stringify(body);
        console.log('Ready to send request.');
        console.log(req);
        if(callback) {
            request.post(req, (error, response, body) => {
                this.parseJSON(body, callback);
            })
        }
    }

  parseJSON(res, callback) {
    var parsed = JSON.parse(res);
    var repoArray = Array(10).fill(null)
    for(var i = 0; i < repoArray.length; i++)
    {
        var node = parsed.data.search.edges[i].node;
        repoArray[i] = (<Repo count={node.stargazers.totalCount} name={node.nameWithOwner} description={node.description} created={node.createdAt} address={node.projectsUrl}/>)
    }

    callback(repoArray);
  }
}