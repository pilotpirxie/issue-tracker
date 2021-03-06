import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import IssueDetailsModal from '../../components/IssueDetailsModal';

const IssueDetails = ({
  selectedIssue, onClose, onFetchIssues, onError,
}) => {
  const { boardId, boardKey } = useParams();
  const [detailsIssue, setDetailsIssue] = useState(null);

  useEffect(() => {
    if (selectedIssue === -1) return;
    fetch(`http://localhost:3001/issues/${selectedIssue}`)
      .then((response) => response.json())
      .then((data) => setDetailsIssue(data))
      .catch(() => onError('Something went wrong when downloading issue details'));
  }, [selectedIssue]);

  const handleSetIssueStatus = (id, status) => {
    fetch(`http://localhost:3001/issues/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardKey,
        boardId,
        status,
      }),
    }).then(() => {
      onClose();
      onFetchIssues();
    }).catch(() => onError("Can't change issue status"));
  };

  const handleRemoveIssue = (id) => {
    fetch(`http://localhost:3001/issues/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardKey,
        boardId,
      }),
    }).then(() => {
      onClose();
      onFetchIssues();
    }).catch(() => onError('Error while removing issue'));
  };

  return (
    <IssueDetailsModal
      isVisible={selectedIssue !== -1}
      onClose={() => onClose()}
      onRemoveIssue={handleRemoveIssue}
      onSetIssueStatus={handleSetIssueStatus}
      issue={detailsIssue || undefined}
    />
  );
};

IssueDetails.propTypes = {
  selectedIssue: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onFetchIssues: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default IssueDetails;
