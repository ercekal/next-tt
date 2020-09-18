import React from 'react';
import { useSelector } from 'react-redux';
import { ResultsData } from '../store/reducer'
import ResultItem from './ResultItem'

const ResultsList: React.FC = () => {
  const resultsData: null | ResultsData = useSelector(
    (state: ResultsDataState) => state.resultsData
  );
  if (!resultsData) return null
  if (resultsData.resultCount === 0) {
    return <div>There is no result. Please change your search term</div>
  }
  return resultsData.results.map((r, i) => <ResultItem item={r} key={i} />)
};

export default ResultsList;