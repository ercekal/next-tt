import * as React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Search from './components/Search'
import ResultsList from './components/ResultsList'
import { ResultsData } from './store/reducer'

const App: React.FC = () => {
  const resultsData: null | ResultsData = useSelector(
    (state: ResultsDataState) => state.resultsData
  );

  return (
    <main>
      <Search />
      Hello
      <ResultsList />
    </main>
  );
};

export default App;
