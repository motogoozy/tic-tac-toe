import { mount } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('renders app', () => {
    expect(component.find('div.App').length).toBe(1);
  });
});
