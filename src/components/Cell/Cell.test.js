import { mount } from 'enzyme';
import Cell from './Cell.jsx';

describe('Cell', () => {
  let component;

  beforeEach(() => {
    component = mount(<Cell />);
  });

  it('hover class gets applied to cell on hover', () => {
    component = mount(<Cell id={1} />);
    component.simulate('mouseenter');
    expect(component.find('div.hover').length).toBe(1);
  });
});
