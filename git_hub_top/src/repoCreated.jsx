import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoCreated extends Component {
  render() {
    return <h2 className="Repo-created">{this.props.text}</h2>;
  }
}

RepoCreated.defaultProps = {
  text:" ",
};

RepoCreated.propTypes = {
  text: PropTypes.text,
};