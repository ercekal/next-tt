import * as React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Search from './components/Search'

const App: React.FC = () => {
  const results: [] | null = useSelector(
    (state: ResultsState) => state.results
  );

  console.log('results: ', results);

  return (
    <main>
      <Search />
    </main>
  );
};

export default App;
