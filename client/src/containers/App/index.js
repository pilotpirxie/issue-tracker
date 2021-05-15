import React from 'react';

import Navbar from '../../components/Navbar';
import IssueList from '../../components/IssueList';
import Layout from '../../components/Layout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <IssueList />
      </Layout>
    </div>
  );
}

export default App;
