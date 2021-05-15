import React from 'react';
import PropTypes from 'prop-types';

import IssueListItem from './IssueListItem';

const IssueList = ({ issues, onSetIssueStatus, onShowIssueDetails }) => (
  <div className="list-group">
    {issues.map((issue) => (
      <IssueListItem
        key={issue.id}
        id={issue.id}
        status={issue.status}
        title={issue.title}
        description={issue.description}
        onShowIssueDetails={onShowIssueDetails}
        onSetIssueStatus={onSetIssueStatus}
      />
    ))}
  </div>
);

IssueList.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShowIssueDetails: PropTypes.func,
  onSetIssueStatus: PropTypes.func,
};

IssueList.defaultProps = {
  onShowIssueDetails: () => {},
  onSetIssueStatus: () => {},
};

export default IssueList;
