import { shallow } from 'enzyme';
import Board from './Board.jsx';
import Cell from '../Cell/Cell.jsx';

describe('Board', () => {
  let component;
  const props = {
    xSelections: [],
    oSelections: [],
  };

  beforeEach(() => {
    component = shallow(<Board {...props} />);
  });

  it('renders 9 cell components', () => {
    expect(component.find(Cell).length).toBe(9);
  });

  it('passes selected prop if player selections includes cell id', () => {
    component = shallow(<Board {...props} xSelections={[3]} oSelections={[5]} />);
    expect(component.find(Cell).at(3).props().xSelected).toBe(true);
    expect(component.find(Cell).at(5).props().oSelected).toBe(true);
  });
});
