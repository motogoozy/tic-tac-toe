import { mount } from 'enzyme';
import App from './App.jsx';
import Cell from './components/Cell/Cell.jsx';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('renders app', () => {
    expect(component.find('div.App').length).toBe(1);
  });

  it('renders board component', () => {
    expect(component.find('div.board').length).toBe(1);
  });

  it('renders message element', () => {
    expect(component.find('p.message').length).toBe(1);
  });

  it('prompts player on their turn', () => {
    expect(component.find('p.message').text()).toEqual("PLAYER X'S TURN");
    component.find(Cell).at(3).simulate('click');
    expect(component.find('p.message').text()).toEqual("PLAYER O'S TURN");
  });
});
