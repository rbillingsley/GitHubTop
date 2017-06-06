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