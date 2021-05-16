import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';
import IssueDetailsModal from '../../components/IssueDetailsModal';

function App() {
  const [issues, setIssues] = useState([]);
  const [detailsIssue, setDetailsIssue] = useState(null);
  const { boardId, boardKey } = useParams();

  const handleFetchIssues = () => {
    fetch(`http://localhost:3001/boards/${boardId}/${boardKey}`)
      .then((response) => response.json())
      .then((data) => setIssues(data.issues))
      .catch((err) => console.error(err));
  };

  const handleShowIssueDetails = (issueId) => {
    fetch(`http://localhost:3001/issues/${issueId}`)
      .then((response) => response.json())
      .then((data) => setDetailsIssue(data))
      .catch((err) => console.error(err));
  };
  const handleCloseDetailsModal = () => setDetailsIssue(null);

  const handleSetIssueStatus = (issueId, status) => {
    fetch(`http://localhost:3001/issues/${issueId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardKey,
        boardId,
        status,
      }),
    }).then(() => {
      handleCloseDetailsModal();
      handleFetchIssues();
    }).catch((err) => console.error(err));
  };

  const handleRemoveIssue = (issueId) => {
    fetch(`http://localhost:3001/issues/${issueId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardKey,
        boardId,
      }),
    }).then(() => {
      handleCloseDetailsModal();
      handleFetchIssues();
    }).catch((err) => console.error(err));
  };

  useEffect(() => {
    handleFetchIssues();
  }, []);

  return (
    <div>
      <Navbar />
      <Layout>
        <IssueList
          issues={issues}
          onShowIssueDetails={handleShowIssueDetails}
          onSetIssueStatus={handleSetIssueStatus}
        />
        <IssueDetailsModal
          isVisible={!!detailsIssue}
          onClose={handleCloseDetailsModal}
          onRemoveIssue={handleRemoveIssue}
          onSetIssueStatus={handleSetIssueStatus}
          issue={detailsIssue || undefined}
        />
      </Layout>
    </div>
  );
}

export default App;
