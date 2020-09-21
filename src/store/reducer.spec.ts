import reducer from './reducer'

export const resultResponse = {
  resultCount: 1,
  results: [{test: 'test'}]
};

describe('results reducer', () => {
  it('results reducer expected state', () => {
    const action = {
      type: 'GET_RESULTS_SUCCESS',
      resultsData: resultResponse,
      error: ''
    };

    interface ResultsData {
      resultCount: number;
      results: []
    }


    type ResultAction = {
      type: string;
      resultsData: ResultsData;
      error: string;
    };
    const updatedState = reducer(undefined, action);

    expect(updatedState.resultsData).toHaveLength(1);
    expect(updatedState.resultsData).toEqual([resultResponse]);
  });
});
