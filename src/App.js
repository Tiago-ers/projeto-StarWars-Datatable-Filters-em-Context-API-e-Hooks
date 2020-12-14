import React from 'react';
import { StarsWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  return (
    <StarsWarsProvider>
      <div>
        <Table />
      </div>
    </StarsWarsProvider>
  );
}

export default App;
