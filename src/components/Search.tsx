import React, {useState, useCallback} from 'react';
import { Input } from '@material-ui/core';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { getResults } from '../store/actionCreators';


const Search = () => {
  const [searchText, setSearchText] = useState<string>('')
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    dispatch(getResults(searchText))
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder='Enter song, artist or album'
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement>,
      ): void => setSearchText(e.target.value)}
        value={searchText}
      />
    </form>
  );
};

export default Search;