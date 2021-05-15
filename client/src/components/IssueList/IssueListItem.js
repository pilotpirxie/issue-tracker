import React from 'react';
import PropTypes from 'prop-types';

import doneIcon from './images/done_white_24dp.svg';
import startIcon from './images/chevron_right_white_24dp.svg';

import './IssueList.css';

const badges = {
  todo: 'badge-secondary',
  pending: 'badge-primary',
  done: 'badge-success',
};

const IssueListItem = ({
  title, description, status,
}) => (
  <div className="list-group-item d-flex justify-content-between cursor-pointer">
    <div className="left">
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-center">
          <div className={`badge ${badges[status.toLowerCase()]} text-capitalize`}>{status}</div>
        </div>
        <div className="ml-3">
          <b>{title}</b>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <div className="btn btn-sm btn-success">
        <img
          src={doneIcon}
          alt="Complete issue"
        />
      </div>
      <div className="btn btn-sm btn-primary ml-2">
        <img
          src={startIcon}
          alt="Start working on issue"
        />
      </div>
    </div>
  </div>
);

IssueListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['TODO', 'PENDING', 'DONE']).isRequired,
};

export default IssueListItem;
