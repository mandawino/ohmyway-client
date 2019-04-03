import React from 'react'
import Image from '../../presenters/Image'
import { shallow } from 'enzyme'


describe('<Image />', () => {
  const imagePath = "/Users/theo/Documents/workspace/ohmyway/ohmyway-server/images/cambodge/kampot-kep/IMG_5992.JPG"
  const url = SERVER.config.BASE_URL+'/image?path='+imagePath;
  const wrapper = shallow(<Image image={imagePath}/>)

  it('should contain image class element', () => {
    expect(wrapper.find('.image').exists()).toBe(true)
  })

  it('should contain image prop', () => {
    // console.log('global', global.SERVER.config.BASE_URL);
    expect(wrapper.props().src).toBe(url)
  })
})