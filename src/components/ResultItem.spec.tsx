import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultItem from './ResultItem';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


const props = {
  artistName: 'test artist',
  trackName: 'test track',
  collectionName: 'test album',
}
describe('ResultItem component', () => {
  it('Should be rendered with correct props', () => {
    const wrapper = mount(<ResultItem item={props} key={1} />)
    expect(wrapper.find('.ResultItem').first().text()).toBe('Artist: test artistSong Name: test trackAlbum: test album')
  })
  it('renders correctly', () => {
  const tree = renderer
      .create(<ResultItem item={props} key={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

