import React, { useState } from 'react';
import Modal from 'react-bootstrap4-modal';
import PropTypes from 'prop-types';
import Alert from '../Alert';

const NewIssueModal = ({
  onClose, isVisible, onCreate,
}) => {
  const [title, setTitle] = useState('');
  const [errorText, setError] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitForm = () => {
    if (!title || !description) {
      setError("Title and description can't be empty");
      return;
    }

    onCreate({
      title, description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      visible={isVisible}
      onClickBackdrop={() => onClose()}
      className="fade"
      dialogClassName="modal-lg"
    >
      <div className="modal-header">
        <h5 className="modal-title d-flex align-items-center">
          Create new issue
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
        <Alert
          text={errorText}
          onClose={() => setError('')}
        />
        <div className="form-group">
          <label
            htmlFor="issue-title"
            className="d-flex flex-column"
          >
            Title
            <input
              type="text"
              id="issue-title"
              className="form-control"
              placeholder="Issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="issue-description"
            className="d-flex flex-column"
          >
            Description
            <textarea
              id="issue-description"
              className="form-control"
              placeholder="Issue description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmitForm}
          data-testid="create-btn"
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

NewIssueModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onCreate: PropTypes.func.isRequired,
};

NewIssueModal.defaultProps = {
  onClose: () => {},
};

export default NewIssueModal;
