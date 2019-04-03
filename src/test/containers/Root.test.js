import React from 'react'
// import ReactDOM from 'react-dom'
import Root from '../../containers/Root'
import { shallow } from 'enzyme'




describe('<Root />', () => {
  const wrapper = shallow(<Root />)
  it('should contain wrapper class element', () => {
    expect(wrapper.find('.wrapper').exists()).toBe(true)
  })

  it('should contain the Menu element', () => {
    expect(wrapper.find('Menu').exists()).toBe(true)
  })

  it('should contain the Main component', () => {
    expect(wrapper.find('Main').exists()).toBe(true)
  })

  // it('matches snapshot', () => {
  //   expect(toJson(root)).toMatchSnapshot()
  // })
})