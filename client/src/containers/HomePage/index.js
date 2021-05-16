import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer';
import HeroImage from '../../components/HeroImage';
import NewBoardForm from '../../components/NewBoardForm';
import Alert from '../../components/Alert';

const HomePage = () => {
  const [alertText, setAlert] = useState('');
  const history = useHistory();

  const handleSubmitForm = (boardKey) => {
    fetch('http://localhost:3001/boards/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: boardKey,
      }),
    }).then((response) => response.json()).then((data) => {
      history.push(`/boards/${data.id}/${data.key}`);
    }).catch(() => setAlert('Something went wrong when creating issue'));
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <Alert
          text={alertText}
          onClose={() => setAlert('')}
        />
        <NewBoardForm onSubmit={handleSubmitForm} />
        <HeroImage />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
