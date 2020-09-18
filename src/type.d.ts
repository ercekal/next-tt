interface ResultsState {
  results: [] | null;
  isLoading: boolean;
  error: string | null;
}

type ResultAction = {
  type: string;
  results: [];
};

type DispatchType = (args: ResultAction) => ResultAction;
