import { mount } from 'enzyme';
import Board from './Board.jsx';

describe('Board', () => {
  let component;

  beforeEach(() => {
    component = mount(<Board xSelections={[]} oSelections={[]} />);
  });

  it('renders 9 cell components', () => {
    expect(component.find('div.cell').length).toBe(9);
  });
});
