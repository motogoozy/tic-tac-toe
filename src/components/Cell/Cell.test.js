import { shallow } from 'enzyme';
import Cell from './Cell.jsx';

describe('Cell', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Cell />);
  });

  it('hover class gets applied to cell on hover', () => {
    component.simulate('mouseenter');
    expect(component.find('.cell').hasClass('hover')).toBe(true);
  });

  it('hover class is removed on mouse leave', () => {
    component.simulate('mouseenter');
    component.simulate('mouseleave');
    expect(component.find('.cell').hasClass('hover')).toBe(false);
  });

  it('adds player class on hover', () => {
    component = shallow(<Cell currentPlayer={'x'} />);
    component.simulate('mouseenter');
    expect(component.find('.cell').hasClass('x')).toBe(true);
  });
});
