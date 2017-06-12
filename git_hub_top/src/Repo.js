import React, { Component } from 'react';

//components for each repo element
export default class RepoList extends Component {
  render(props) {
    return (
      <div className="RepoList">
        {this.props.repo_list.map(( node =>
        <Repo
          className="Repo" 
          key={node.key} 
          count={node.props.count} 
          name={node.props.name} 
          created={node.props.created} 
          description={node.props.description} 
          address={node.props.address} 
          language={node.props.language}/>
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
        <Name text={this.props.name} link={this.props.address}/>
        <Description text={this.props.description}/>
        <Created text={this.props.created}/>
        <Language text={this.props.language}/>
      </div>
    )
  }
}

export class Name extends Component {
  render(props) {
    return <a className="Repo-name" href={this.props.link}>{this.props.text}</a>;
  }
}

export class Count extends Component {
  render(props) {
    return <h2 className="Repo-count">{this.props.text}</h2>;
  }
}

export class Description extends Component {
  render(props) {
    return <p className="Repo-description">{this.props.text}</p>;
  }
}

export class Created extends Component {
  render(props) {
    return <h2 className="Repo-created">{this.props.text}</h2>;
  }
}

export class Language extends Component {
  render(props) {
    return <h3 className="Repo-language">{this.props.text}</h3>;
  }
}