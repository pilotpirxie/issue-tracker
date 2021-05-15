import React from 'react';
import PropTypes from 'prop-types';

import IssueListItem from './IssueListItem';

const IssueList = ({ issues }) => (
  <div className="list-group">
    {issues.map((issue) => (
      <IssueListItem
        key={issue.id}
        id={issue.id}
        status={issue.status}
        title={issue.title}
        description={issue.description}
      />
    ))}
  </div>
);

IssueList.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IssueList;
