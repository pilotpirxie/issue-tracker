import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';
import IssueDetails from '../IssueDetails';

function App() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(-1);
  const { boardId, boardKey } = useParams();

  const handleFetchIssues = () => {
    fetch(`http://localhost:3001/boards/${boardId}/${boardKey}`)
      .then((response) => response.json())
      .then((data) => setIssues(data.issues))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleFetchIssues();
  }, []);

  const handleCloseModal = () => {
    setSelectedIssue(-1);
  };

  return (
    <div>
      <Navbar />
      <Layout>
        <IssueList
          issues={issues}
          onShowIssueDetails={setSelectedIssue}
        />
        <IssueDetails
          selectedIssue={selectedIssue}
          onClose={handleCloseModal}
          onFetchIssues={handleFetchIssues}
        />
      </Layout>
    </div>
  );
}

export default App;
