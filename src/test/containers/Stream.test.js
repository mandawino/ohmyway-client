import React from 'react'
import { Stream } from '../../containers/Stream'
import { shallow, mount } from 'enzyme'
import imagesData from '../imagesDataTest.json'
// import toJson from 'enzyme-to-json'


function countImages(images, initialCount = 0){
  return Object.keys(images).reduce((result, key) => {
    if(typeof images[key] === 'string'){
        return ++result
    } else if (typeof images === 'object') {
      return countImages(images[key], result)
    } else {
      throw new Error("Object can only be made up of objects and strings")
    }
  }, initialCount)
}

describe('<Stream />', () => {
  it('Display all images', () => {
    const props = {
      images: imagesData,
    }
    const params = {
      match: {params: {country: undefined}}
    }
 
    const wrapper = shallow(<Stream {...props} {...params} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('Image').length).toBe(countImages(imagesData));
  })

  it('Display only thailand images', () => {
    const props = {
      images: imagesData,
    }
    const params = {
      match: {params: {country: 'thailande'}}
    }
 
    const wrapper = shallow(<Stream {...props} {...params} />)
    expect(wrapper.find('Image').length).toBe(countImages(imagesData.thailande));
  })
})