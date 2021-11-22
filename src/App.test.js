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

  it('renders winning message if a player wins', () => {
    const clicks = [0, 2, 3, 5, 6];
    clicks.forEach(idx => {
      component.find(Cell).at(idx).simulate('click');
    });
    expect(component.find('p.message').text()).toEqual('PLAYER X WINS!');
  });

  it('renders tie message if game ends in a tie', () => {
    const clicks = [0, 1, 2, 6, 7, 8, 3, 4, 5];
    clicks.forEach(idx => {
      component.find(Cell).at(idx).simulate('click');
    });
    expect(component.find('p.message').text()).toEqual("IT'S A TIE!");
  });

  it('should not allow selection if cell is already selected', () => {
    component.find(Cell).at(0).simulate('click');
    component.find(Cell).at(0).simulate('click');
    expect(component.find(Cell).at(0).props().oSelected).toBe(false);
  });
});
