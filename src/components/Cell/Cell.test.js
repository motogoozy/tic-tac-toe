import { mount } from 'enzyme';
import Cell from './Cell.jsx';

describe('Cell', () => {
  let component;

  beforeEach(() => {
    component = mount(<Cell />);
  });

  it('hover class gets applied to cell on hover', () => {
    component.simulate('mouseenter');
    expect(component.find('div.hover').length).toBe(1);
  });

  it('hover class is removed on mouse leave', () => {
    component.simulate('mouseenter');
    component.simulate('mouseleave');
    expect(component.find('div.hover').length).toBe(0);
  });
});
