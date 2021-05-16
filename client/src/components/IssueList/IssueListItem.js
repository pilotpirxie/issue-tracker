import React from 'react';
import PropTypes from 'prop-types';

import doneIcon from './images/done_white_24dp.svg';
import startIcon from './images/chevron_right_white_24dp.svg';

import './IssueList.css';

import { badges, badgesLabel } from '../../utils/constants';

const IssueListItem = ({
  title, status, id, onSetIssueStatus, onShowIssueDetails,
}) => (
  <div
    role="link"
    className="list-group-item d-flex justify-content-between cursor-pointer"
    onClick={() => onShowIssueDetails(id)}
    onKeyDown={() => onShowIssueDetails(id)}
    tabIndex={-1}
  >
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex">
        <div className={`badge ${badges[status]} text-capitalize`}>{badgesLabel[status]}</div>
      </div>
      <div className="ml-3">
        <b>{title}</b>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <div
        role="button"
        className="btn btn-sm btn-success"
        onClick={() => onSetIssueStatus(id, 'DONE')}
        onKeyDown={() => onSetIssueStatus(id, 'DONE')}
        tabIndex={-1}
      >
        <img
          src={doneIcon}
          alt="Complete issue"
        />
      </div>
      <div
        role="button"
        className="btn btn-sm btn-primary ml-2"
        onClick={() => onSetIssueStatus(id, 'PENDING')}
        onKeyDown={() => onSetIssueStatus(id, 'PENDING')}
        tabIndex={-1}
      >
        <img
          src={startIcon}
          alt="Start working on issue"
        />
      </div>
    </div>
  </div>
);

IssueListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf([0, 1, 2]).isRequired,
  onShowIssueDetails: PropTypes.func,
  onSetIssueStatus: PropTypes.func,
};

IssueListItem.defaultProps = {
  onShowIssueDetails: () => {},
  onSetIssueStatus: () => {},
};

export default IssueListItem;
