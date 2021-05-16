import React from 'react';
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';
import { badges, badgesLabel } from '../../utils/constants';

const IssueDetailsModal = ({
  onClose, isVisible, onRemoveIssue, onSetIssueStatus, issue,
}) => (
  <Modal
    visible={isVisible}
    onClickBackdrop={() => onClose()}
    className="fade"
    dialogClassName="modal-lg"
  >
    <div className="modal-header">
      <h5 className="modal-title d-flex align-items-center">
        <div className={`badge ${badges[issue.status]} text-capitalize mr-2`}>
          {badgesLabel[issue.status]}
        </div>
        {issue.title}
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={() => onClose()}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      {issue.description}
    </div>
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => onRemoveIssue(issue.id)}
      >
        Remove
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onSetIssueStatus(issue.id, 1)}
      >
        Pending
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => onSetIssueStatus(issue.id, 2)}
      >
        Done
      </button>
    </div>
  </Modal>
);

IssueDetailsModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onRemoveIssue: PropTypes.func,
  onSetIssueStatus: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  issue: PropTypes.object,
};

IssueDetailsModal.defaultProps = {
  onClose: () => {},
  onRemoveIssue: () => {},
  onSetIssueStatus: () => {},
  issue: {},
};

export default IssueDetailsModal;
