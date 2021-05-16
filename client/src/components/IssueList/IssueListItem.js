import React from 'react';
import PropTypes from 'prop-types';

import icon from './images/arrow_forward_ios_black_24dp.svg';

import './IssueList.css';

import { badges, badgesLabel } from '../../utils/constants';

const IssueListItem = ({
  title, status, id, onShowIssueDetails,
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
      <img
        src={icon}
        alt="Show details"
      />
    </div>
  </div>
);

IssueListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf([0, 1, 2]).isRequired,
  onShowIssueDetails: PropTypes.func,
};

IssueListItem.defaultProps = {
  onShowIssueDetails: () => {},
};

export default IssueListItem;
