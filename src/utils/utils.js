export const getObjectValues = (object, initial = []) => {
  if(object && Object.values(object).length){
      return Object.values(object).reduce(
        (result, value) => {
            if(typeof value === 'string'){
                return [...result, value]
            } else if (typeof value === 'object') {
                return getObjectValues(value, result)
            } else {
                throw new Error("Object structure is incorrect")
            }
        }
        , initial)
  } else {
      console.warn('Object to scan is incorrect')
      return []
  }
}

export const countObjectValues = (images) => getObjectValues(images).length;

export const areArraysEqual = (array1, array2) => {
    const sortedArray2 = array2.sort()
    return array1.length === array2.length 
      && array1.sort().every((item, index) => item === sortedArray2[index]);
}


