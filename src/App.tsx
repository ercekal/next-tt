import * as React from 'react';
import './styles.css';
import Search from './components/Search'
import ResultsList from './components/ResultsList'

const App: React.FC = () => {
  return (
    <>
      <Search />
      <ResultsList />
    </>
  );
};

export default App;
