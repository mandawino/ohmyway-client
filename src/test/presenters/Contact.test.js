import React from 'react'
import Contact from '../../presenters/Contact'
import { shallow } from 'enzyme'


describe('<Contact />', () => {
  const wrapper = shallow(<Contact />)
  it('should contain 1 name class h2 element', () => {
    expect(wrapper.find('.name').exists()).toBe(true)
    expect(wrapper.find('h2').length).toBe(1)
  })
})

