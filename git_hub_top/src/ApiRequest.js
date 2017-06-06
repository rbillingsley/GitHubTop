import React, { Component } from 'react';
import Api from './Api.js';

class ApiRequest extends Component {
  constructor() {
    super();
    this.state = {
        response: "None"
    };
  }

  queryAPI(e) {
    var github = new Api();

    github.query(`
    {
        viewer {
            login
            name
        }
    }
    `, null, (res, err) => {
        this.setState( {
            response: JSON.stringify(res, null, 2)
        });
    });
  }


  render() {
    return (
        <div>
            <button onClick={(e) => this.queryAPI(e)}>
                Click me!
            </button>
            <p>
                {this.state.response}
            </p>
        </div>
    );
  }
}

export default ApiRequest;