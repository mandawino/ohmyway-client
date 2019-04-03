import reducer from '../../reducers/reducer'
import imagesData from '../imagesDataTest.json'



describe('reducer', () => {
  // const wrapper = shallow(<Root />)
  it('returns the correct state', () => {
    const action = {
      type: 'SET_IMAGES',
      images: imagesData
    }
    const expectedState = {images: imagesData}
    expect(reducer(undefined, action)).toEqual(expectedState);
  })

  it('returns the same state after a wrong action', () => {
    const action = {
      type: 'WRONG_ACTION'
    }
    const state = {images: imagesData}
    expect(reducer(state, action)).toEqual(state);
  })
})