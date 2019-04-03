import React from 'react'
import Main from '../../containers/Main'
import { shallow } from 'enzyme'


describe('<Main />', () => {
  const wrapper = shallow(<Main />)
  
  it('should contain two routes', () => {
    expect(wrapper.find('Route').length).toBe(2)
  })
})