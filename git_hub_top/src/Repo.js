import React, { Component } from 'react';

//components for each repo element
export default class Repo extends Component {
  render() {
    return (
      <div className="Repo">
        <Count className="Repo-count" text={this.props.count}/>
        <Name className="Repo-name" text={this.props.name}/>
        <Description className="Repo-description" text={this.props.description}/>
        <Created className="Repo-created" text={this.props.created}/>
        <Address className="Repo-address" text={this.props.address}/>
      </div>
    )
  }
}

export class Count extends Component {
  render(props) {
    return <h2>{"Stars: " + this.props.text}</h2>;
  }
}

export class Name extends Component {
  render(props) {
    return <h1>{"Repo Name: " + this.props.text}</h1>;
  }
}

export class Description extends Component {
  render(props) {
    return <p>{"Description: " + this.props.text}</p>;
  }
}

export class Created extends Component {
  render(props) {
    return <h2>{"Created: " + this.props.text}</h2>;
  }
}

export class Address extends Component {
  render(props) {
    return <a href={this.props.text}> {this.props.text} </a>;
  }
}