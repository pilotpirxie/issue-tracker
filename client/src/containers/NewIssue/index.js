import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NewIssueModal from '../../components/NewIssueModal';

const NewIssue = ({ isVisible, onClose, onFetchIssues }) => {
  const { boardId, boardKey } = useParams();

  const handleCreateIssue = (issue) => {
    const { title, description } = issue;

    fetch('http://localhost:3001/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardKey,
        boardId,
        title,
        description,
      }),
    }).then(() => {
      onClose();
      onFetchIssues();
    }).catch((err) => console.error(err));
  };

  return (
    <NewIssueModal
      isVisible={isVisible}
      onClose={onClose}
      onCreate={handleCreateIssue}
    />
  );
};

NewIssue.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFetchIssues: PropTypes.func.isRequired,
};

export default NewIssue;
