import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoCount extends Component {
  render() {
    return <h2 className="Repo-count">{this.props.text}</h2>;
  }
}

RepoCount.propTypes = {
  text: PropTypes.text,
};