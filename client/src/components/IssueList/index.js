import React from 'react';
import PropTypes from 'prop-types';

import IssueListItem from './IssueListItem';

const IssueList = ({ issues, onShowIssueDetails }) => (
  <div className="list-group">
    {issues.map((issue) => (
      <IssueListItem
        key={issue.id}
        id={issue.id}
        status={issue.status}
        title={issue.title}
        onShowIssueDetails={onShowIssueDetails}
      />
    ))}
  </div>
);

IssueList.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShowIssueDetails: PropTypes.func,
};

IssueList.defaultProps = {
  onShowIssueDetails: () => {},
};

export default IssueList;
