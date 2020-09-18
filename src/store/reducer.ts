import { GET_RESULTS_REQUEST, GET_RESULTS_SUCCESS } from './actionTypes';

interface ResultsState {
  results: [] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ResultsState = {
  results: null,
  error: null,
  isLoading: false
}


const reducer = (
  state: ResultsState = initialState,
  action: ResultAction
): ResultsState => {
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
        results: action.results,
        isLoading: false
      }
    }
  }
  return state;
};

export default reducer;
