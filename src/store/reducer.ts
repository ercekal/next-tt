import { GET_RESULTS_REQUEST, GET_RESULTS_SUCCESS } from './actionTypes';

export interface ResultsData {
  resultCount: number;
  results: []
}
interface ResultsDataState {
  resultsData: null | ResultsData;
  isLoading: boolean;
  error: string | null;
}

const initialState: ResultsDataState = {
  resultsData: null,
  error: null,
  isLoading: false
}


const reducer = (
  state: ResultsDataState = initialState,
  action: ResultAction
): ResultsDataState => {
  switch (action.type) {
    case GET_RESULTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_RESULTS_SUCCESS: {
      return {
        ...state,
        resultsData: action.resultsData,
        isLoading: false
      }
    }
  }
  return state;
};

export default reducer;
