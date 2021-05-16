import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ text, onClose }) => (
  <div>
    {text && (
    <div className="alert alert-danger d-flex align-items-center justify-content-between">
      <div>{text}</div>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
        onKeyDown={onClose}
        role="link"
        tabIndex={-1}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    )}
  </div>
);

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
