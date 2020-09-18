import * as React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Search from './components/Search'
import { ResultsData } from './store/reducer'

const App: React.FC = () => {
  const resultsData: null | ResultsData = useSelector(
    (state: ResultsDataState) => state.resultsData
  );

  console.log('resultsData: ', resultsData);

  return (
    <main>
      <Search />
    </main>
  );
};

export default App;
