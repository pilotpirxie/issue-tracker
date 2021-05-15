import React from 'react';
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';

const IssueDetailsModal = ({
  children, onClose, isVisible, cancelButtonText, primaryButtonText, title, onSubmit,
}) => (
  <Modal
    visible={isVisible}
    onClickBackdrop={() => onClose()}
    className="fade"
    dialogClassName="modal-lg"
  >
    <div className="modal-header">
      <h5 className="modal-title">{title}</h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      {children}
    </div>
    <div className="modal-footer">
      {cancelButtonText && (
      <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
        onClick={() => onClose}
      >
        {cancelButtonText}
      </button>
      )}
      {primaryButtonText && (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onSubmit()}
      >
        {primaryButtonText}
      </button>
      )}
    </div>
  </Modal>
);

IssueDetailsModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  title: PropTypes.string,
  cancelButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  primaryButtonText: PropTypes.string.isRequired,
};

IssueDetailsModal.defaultProps = {
  cancelButtonText: false,
  title: '',
  onClose: () => {},
  onSubmit: () => {},
};

export default IssueDetailsModal;
