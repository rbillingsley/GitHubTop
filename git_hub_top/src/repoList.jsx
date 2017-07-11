import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Repo from './repo';

// components for each repo element
export default class RepoList extends PureComponent {
  render() {
    return (
      <div className="RepoList">
        {this.props.repo_list.map((node =>
          (<Repo
            className="Repo"
            key={node.key}
            index={Number(node.key) + 1}
            count={node.props.count}
            name={node.props.name}
            created={node.props.created}
            description={node.props.description}
            address={node.props.address}
            language={node.props.language}
          />)
        ))}
      </div>
    );
  }
}

RepoList.defaultProps = {
  repo_list: PropTypes.array,
};

RepoList.propTypes = {
  repo_list: PropTypes.array,
};

