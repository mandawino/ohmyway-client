import React from 'react'
import ConnectedStream, { Stream } from '../../containers/Stream'
import { shallow, mount } from 'enzyme'
import propsStreamSuccess from '../data/propsStreamSuccess.json'
import propsStreamSuccessThailand from '../data/propsStreamSuccessThailand.json'
import dataFetchGetImages from '../data/dataFetchGetImages.json'
// import toJson from 'enzyme-to-json'
import { countObjectValues, getObjectValues } from '../../utils/utils'

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
  const defaultImagesState = {
    data: null,
    loading: false,
    error: null
  }

  it('Display all images', () => {
    const props = propsStreamSuccess
    const params = {
      match: {params: {country: undefined}}
    }
 
    const wrapper = shallow(<Stream {...props} {...params} />, { disableLifecycleMethods: true })
    expect(wrapper.find('Image').length).toBe(countObjectValues(dataFetchGetImages));
  })

  it('Display only thailand images', () => {
    const props = propsStreamSuccessThailand;
    const params = {
      match: {params: {country: 'thailande'}}
    }
 
    const wrapper = shallow(<Stream {...props} {...params} />, { disableLifecycleMethods: true })
    expect(wrapper.find('Image').length).toBe(countObjectValues(dataFetchGetImages.thailande));
  })

  it('Display loading', () => {
    const props = {
      ...defaultImagesState,
      loading: true
    }
    const wrapper = shallow(<Stream {...props} />, { disableLifecycleMethods: true })
    expect(wrapper.find('.spinner').length).toBe(1)
  })

  it('Display error', () => {
    const error = new Error('Error message')
    const props = {
      ...defaultImagesState,
      error
    }
    const wrapper = shallow(<Stream {...props} />, { disableLifecycleMethods: true })
    expect(wrapper.find('.error').length).toBe(1)
  })
})