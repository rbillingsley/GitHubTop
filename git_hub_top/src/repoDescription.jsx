import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoDescription extends Component {
  render() {
    return <p className="Repo-description">{this.props.text}</p>;
  }
}

RepoDescription.propTypes = {
  text: PropTypes.text,
};