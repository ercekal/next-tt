import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { ResultsData } from '../store/reducer'
import ResultItem from './ResultItem'

const ResultsList: React.FC = () => {
  const [initialNumber, setInitialNumber] = useState<number>(1)
  const [isFetching, setIsFetching] = useState(false);

  const resultsData: null | ResultsData = useSelector(
    (state: ResultsDataState) => state.resultsData
  );
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setInitialNumber (initialNumber + 1)
      setIsFetching(false);
    }, 500);
  }

  if (!resultsData) return null
  if (resultsData.resultCount === 0) {
    return <div>There is no result. Please change your search term</div>
  }
  return (
    <>
      {resultsData.results.slice(0, initialNumber * 10).map((r, i) => <ResultItem item={r} key={i} />)}
    </>
  )
};

export default ResultsList;