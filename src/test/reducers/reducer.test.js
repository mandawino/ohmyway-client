import reducer from '../../reducers/Reducer'
import dataFetchGetImages from '../data/dataFetchGetImages.json'
import { getImagesStarted, getImagesSuccess, getImagesFailure, getImagesEnded } from '../../actions/actionCreators'



describe('reducer', () => {
  const defaultImagesState = {
    data: null,
    loading: false,
    error: null
  }
  
  it('returns loading after started', () => {
    const action = getImagesStarted()
    const expectedState = {
      images: {
        ...defaultImagesState,
        loading: true,
      }
    }
    expect(reducer(undefined, action)).toEqual(expectedState);
  })

  it('returns images after success', () => {
    const action = getImagesSuccess(dataFetchGetImages)
    const expectedState = {
      images: {
        ...defaultImagesState,
        data: dataFetchGetImages
      }
    }
    expect(reducer(undefined, action)).toEqual(expectedState);
  })

  it('returns the error after failure', () => {
    const error = new Error('Error message')
    const action = getImagesFailure(error)
    const expectedState = {
      images: {
        ...defaultImagesState,
        error
      }
    }
    expect(reducer(undefined, action)).toEqual(expectedState);
  })

  it('returns loading after ended', () => {
    const action = getImagesEnded()
    const previousState = {
      images: {
        ...defaultImagesState,
        loading: true
      }
    }
    const expectedState = {
      images: {
        ...defaultImagesState,
        loading: false,
      }
    }
    expect(reducer(previousState, action)).toEqual(expectedState);
  })

  it('returns the same state after a wrong action', () => {
    const action = {
      type: 'WRONG_ACTION'
    }
    const state = {
      images: {
        data: dataFetchGetImages,
        loading: false,
        error: null
      }
    }
    expect(reducer(state, action)).toEqual(state);
  })
})