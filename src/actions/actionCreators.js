import { GET_IMAGES_STARTED, GET_IMAGES_SUCCESS, GET_IMAGES_FAILURE, GET_IMAGES_ENDED } from './actionTypes'

export const getImagesStarted = () => ({
  type:  GET_IMAGES_STARTED,
})

export const getImagesSuccess = (images) => ({
  type: GET_IMAGES_SUCCESS,
  images: images
})

export const getImagesFailure = (error) => ({
  type: GET_IMAGES_FAILURE,
  error: error
})

export const getImagesEnded = () => ({
  type: GET_IMAGES_ENDED,
})
