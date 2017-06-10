import React, { Component } from 'react';

//components for each repo element
export default class RepoList extends Component {
  render(props) {
    return (
      <div className="RepoList">
        {this.props.repo_list.map(( node =>
        <Repo className="Repo" key={node.key} count={node.props.count} name={node.props.name} created={node.props.created} description={node.props.description} address={node.props.address}/>
        ))}
      </div>
    )
  }
}

export class Repo extends Component {
  render(props) {
    return (
      <div className="Repo">
        <Count text={this.props.count}/>
        <Name text={this.props.name}/>
        <Description text={this.props.description}/>
        <Created text={this.props.created}/>
        <Address text={this.props.address}/>
      </div>
    )
  }
}

export class Count extends Component {
  render(props) {
    return <h2 className="Repo-count">{"Stars: " + this.props.text}</h2>;
  }
}

export class Name extends Component {
  render(props) {
    return <h1 className="Repo-name">{"Repo Name: " + this.props.text}</h1>;
  }
}

export class Description extends Component {
  render(props) {
    return <p className="Repo-description">{"Description: " + this.props.text}</p>;
  }
}

export class Created extends Component {
  render(props) {
    return <h2 className="Repo-created">{"Created: " + this.props.text}</h2>;
  }
}

export class Address extends Component {
  render(props) {
    return <a className="Repo-address" href={this.props.text}> {this.props.text} </a>;
  }
}