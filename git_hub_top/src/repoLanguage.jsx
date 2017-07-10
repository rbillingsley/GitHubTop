import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class RepoLanguage extends Component {
  render() {
    return <h3 className="Repo-language">{this.props.text}</h3>;
  }
}

RepoLanguage.propTypes = {
  text: PropTypes.text,
};