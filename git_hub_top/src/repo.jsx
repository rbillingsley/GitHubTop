import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoName from './repoName';
import RepoDescription from './repoDescription';
import RepoCount from './repoCount';
import RepoCreated from './repoCreated';
import RepoLanguage from './repoLanguage';

export default class Repo extends Component {
  render() {
    return (
      <div className="Repo">
        <RepoCount text={this.props.count} />
        <RepoName text={this.props.name} link={this.props.address} />
        <RepoDescription text={this.props.description} />
        <RepoCreated text={this.props.created} />
        <RepoLanguage text={this.props.language} />
      </div>
    );
  }
}

Repo.propTypes = {
  count: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
  language: PropTypes.string,
};

