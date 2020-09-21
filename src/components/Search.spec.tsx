import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Search component', () => {
  const mockStore = configureStore()
  const store = mockStore()
  it('renders correctly', () => {
  const tree = renderer
      .create(<Provider store={store}><Search /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

