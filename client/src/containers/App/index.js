import React from 'react';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';

function App() {
  // const [issues, setIssues] = useState([]);

  const issues = [{
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    status: 'PENDING',
  }];
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <IssueList issues={issues} />
      </Layout>
    </div>
  );
}

export default App;
