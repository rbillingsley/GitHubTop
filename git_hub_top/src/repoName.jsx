import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoName extends Component {
  render() {
    return <a className="Repo-name" href={this.props.link}>{this.props.text}</a>;
  }
}

RepoName.propTypes = {
  text: PropTypes.text,
  link: PropTypes.link,
};