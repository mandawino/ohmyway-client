import React from 'react'
import Menu from '../../presenters/Menu'
import { shallow } from 'enzyme'


describe('<Menu />', () => {
  const wrapper = shallow(<Menu />)
  
  it('should contain 1 name class h2 element', () => {
    expect(wrapper.find('Navbar').length).toBe(1)
  })

  it('should contain 7 navItems', () => {
    expect(wrapper.find('NavItem').length).toBe(8);
  })
})