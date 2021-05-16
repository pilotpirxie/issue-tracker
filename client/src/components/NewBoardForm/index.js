import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ onSubmit }) => {
  const [boardKey, setBoardKey] = useState('');

  const handleSubmitForm = () => {
    onSubmit(boardKey);
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="d-flex align-items-center flex-column justify-content-center h-100">
        <h1>Issue Tracker ✔</h1>
        <h5>Create board in a few seconds and reach your goals!</h5>
        <div className="form-group d-flex flex-column w-100 mt-3">
          <label htmlFor="board-key">
            Secret key for your board (leave empty to generate)
            <input
              id="board-key"
              type="text"
              className="form-control"
              placeholder="e.g. impressive-grand-blue-board-1724"
              value={boardKey}
              onChange={(e) => setBoardKey(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleSubmitForm}
            onKeyDown={handleSubmitForm}
            tabIndex={-1}
          >
            Create new board
          </button>
        </div>
      </div>
    </div>
  );
};

NewBoardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;
