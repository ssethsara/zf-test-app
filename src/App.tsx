import { Container } from '@mui/material';
import React from 'react';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <div className='App'>
      <Container sx={{ background: 'silver', pt: '4vh', pb: '8vh' }}>
        <FormPage />
      </Container>
    </div>
  );
}

export default App;
