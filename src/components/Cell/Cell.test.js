import { shallow } from 'enzyme';
import Cell from './Cell.jsx';

describe('Cell', () => {
  let component;
  const props = {
    currentPlayer: 'x',
    onSelect: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Cell {...props} />);
  });

  it('hover class gets applied to cell on hover', () => {
    component.simulate('mouseenter');
    expect(component.find('.item-container').hasClass('hover')).toBe(true);
  });

  it('hover class is removed on mouse leave', () => {
    component.simulate('mouseenter');
    component.simulate('mouseleave');
    expect(component.find('.item-container').hasClass('hover')).toBe(false);
  });

  it('adds player class on hover', () => {
    component.simulate('mouseenter');
    expect(component.find('.cell').hasClass('x')).toBe(true);
  });

  it('should add player class if selected prop is true', () => {
    component = shallow(<Cell {...props} xSelected={true} />);
    expect(component.find('.cell').hasClass('x')).toBe(true);
  });
});
