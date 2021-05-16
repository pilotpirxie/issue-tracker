import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';
import IssueDetails from '../IssueDetails';
import NewIssue from '../NewIssue';
import Alert from '../../components/Alert';

function App() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(-1);
  const [alertText, setAlert] = useState('');
  const [isVisibleNewIssueModal, setIsVisibleNewIssueModal] = useState(false);
  const { boardId, boardKey } = useParams();

  const handleFetchIssues = () => {
    fetch(`http://localhost:3001/boards/${boardId}/${boardKey}`)
      .then((response) => response.json())
      .then((data) => setIssues(data.issues))
      .catch(() => setAlert('Invalid board id'));
  };

  useEffect(() => {
    handleFetchIssues();
  }, []);

  const handleCloseDetailsModal = () => {
    setSelectedIssue(-1);
  };

  return (
    <div>
      <Navbar
        onClickCreate={() => setIsVisibleNewIssueModal(true)}
      />
      <Layout>
        <Alert
          text={alertText}
          onClose={() => setAlert('')}
        />
        <IssueList
          issues={issues}
          onShowIssueDetails={setSelectedIssue}
        />
        <IssueDetails
          selectedIssue={selectedIssue}
          onClose={handleCloseDetailsModal}
          onFetchIssues={handleFetchIssues}
          onError={setAlert}
        />
        <NewIssue
          isVisible={isVisibleNewIssueModal}
          onClose={() => setIsVisibleNewIssueModal(false)}
          onFetchIssues={handleFetchIssues}
          onError={setAlert}
        />
      </Layout>
    </div>
  );
}

export default App;
