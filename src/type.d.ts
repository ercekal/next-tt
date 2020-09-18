interface ResultsData {
  resultCount: number;
  results: []
}

interface ResultsDataState {
  resultsData: ResultsData | null;
  isLoading: boolean;
  error: string | null;
}

type ResultAction = {
  type: string;
  resultsData: ResultsData;
};

type DispatchType = (args: ResultAction) => ResultAction;
