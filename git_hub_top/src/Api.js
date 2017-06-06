import config from './config.js';
import request from 'request';

class Api {
    constructor() {
        this.url = 'https://api.github.com/graphql'
        this.token = config.token;
        this.userAgent = 'github-graphql-test'
    }

    query(payload, variables, callback) {
        const req = {};
        req.url = this.url;
        var headers = ({
            'Content-type': 'application/json',
            'Authorization': 'bearer ' + this.token,
            'User-Agent': this.userAgent
        });
        req.headers = headers;
        var body = {};
        body.query = payload.replace(/\n/g, '');
        if(variables) {
            body.variables = JSON.stringify(variables);
        }
        req.body = JSON.stringify(body);
        console.log('Ready to send request.');
        console.log(req);
        if(callback) {
            request.post(req, (error, response, body) => {
                callback(body);
            })
        }
    }
}

export default Api;