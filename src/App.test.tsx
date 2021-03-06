import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from './App';


it('renders correctly', () => {
  const mockStore = configureStore()
  const store = mockStore()
  const tree = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});