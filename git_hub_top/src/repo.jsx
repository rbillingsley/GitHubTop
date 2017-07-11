import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Repo extends PureComponent {
  render() {
    return (
      <div className="Repo">
        <h2 className="Repo-key">{this.props.index}</h2>
        <h2 className="Repo-count">{this.props.count}</h2>
        <a className="Repo-name" href={this.props.address}>{this.props.name}</a>
        <p className="Repo-description">{this.props.description}</p>
        <h2 className="Repo-created">{this.props.created}</h2>
        <h3 className="Repo-language">{this.props.language}</h3>
      </div>
    );
  }
}

Repo.defaultProps = {
  index: PropTypes.any,
  count: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
  language: PropTypes.string,
};

Repo.propTypes = {
  index: PropTypes.any,
  count: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
  language: PropTypes.string,
};

