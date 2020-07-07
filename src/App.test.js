import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it ('renders an instance of the Main component', () => {
    expect(wrapper.find('Main').length).toEqual(1);
  })
});