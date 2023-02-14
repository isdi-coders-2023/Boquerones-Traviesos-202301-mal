import { get } from 'http';
import React, { useEffect } from 'react';

import './App.css';
import DisneyCard from './components/Card/Card';
import useGetCharactersList from './components/hooks/useGetCharactersList/useGetCharactersList';

function App() {
  const { characters, getCharactersList } = useGetCharactersList();

  useEffect(() => {
    getCharactersList();
  }, []);
  return (
    <>
      <DisneyCard />
    </>
  );
}

export default App;
