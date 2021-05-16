import React from 'react';
import PropTypes from 'prop-types';

import IssueListItem from './IssueListItem';

const IssueList = ({ issues, onShowIssueDetails }) => (
  <div className="list-group mt-2 mb-5">
    {issues.map((issue) => (
      <IssueListItem
        key={issue.id}
        id={issue.id}
        status={issue.status}
        title={issue.title}
        onShowIssueDetails={onShowIssueDetails}
      />
    ))}
    {issues.length === 0
    && (
    <div className="mt-5">
      <h4 className="text-center mt-5 mb-5">
        Board is empty, create new issue!
      </h4>
    </div>
    )}
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
