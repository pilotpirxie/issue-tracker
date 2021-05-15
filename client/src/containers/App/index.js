import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';
import IssueDetailsModal from '../../components/IssueDetailsModal';

function App() {
  const [issues, setIssues] = useState([]);

  const handleShowIssueDetails = (issueId) => issueId;
  const handleSetIssueStatus = (issueId, status) => [issueId, status];

  useEffect(() => {
    setIssues([{
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
      status: 'PENDING',
    }]);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Layout>
        <IssueList
          issues={issues}
          onShowIssueDetails={handleShowIssueDetails}
          onSetIssueStatus={handleSetIssueStatus}
        />
        <IssueDetailsModal
          isVisible
          primaryButtonText="Submit"
          cancelButtonText="Cancel"
          title="Issue Title"
          onClose={() => {}}
          onSubmit={() => {}}
        >
          <p>Test</p>
        </IssueDetailsModal>
      </Layout>
    </div>
  );
}

export default App;
