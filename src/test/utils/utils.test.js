import { getObjectValues, countObjectValues, areArraysEqual} from '../../utils/utils'

import propsStreamSuccess from '../data/propsStreamSuccess.json'
import propsStreamSuccessThailand from '../data/propsStreamSuccessThailand.json'
import dataFetchGetImages from '../data/dataFetchGetImages.json'


describe('Utils', () => {
  it('Test getObjectValues', () => {
    expect(getObjectValues(dataFetchGetImages.thailande)).toEqual(propsStreamSuccessThailand.data)
    expect(getObjectValues(dataFetchGetImages)).toEqual(propsStreamSuccess.data)
  })
  
  it('Test countObjectValues', () => {
    expect(countObjectValues(dataFetchGetImages.thailande)).toEqual(propsStreamSuccessThailand.data.length)
    expect(countObjectValues(dataFetchGetImages)).toEqual(propsStreamSuccess.data.length)
  })

  it('Test areArraysEqual', () => {
    expect(areArraysEqual(['1', '2', '3'], ['1', '2', '3'])).toBe(true)
    expect(areArraysEqual(['3', '1', '2'], ['1', '2', '3'])).toBe(true)
    expect(areArraysEqual(['1', '2', '3'], ['3', '1', '2'],)).toBe(true)
    expect(areArraysEqual(['1', '2', '3', '3'], ['1', '3', '3', '2'])).toBe(true)

    expect(areArraysEqual(['1', '2', '3'], ['1', '2', '4'])).toBe(false)
    expect(areArraysEqual(['1', '2', '3'], ['1', '2', '3', '4'])).toBe(false)
    expect(areArraysEqual(['1', '2', '3', '4'], ['1', '2', '3'])).toBe(false)
  })
})

