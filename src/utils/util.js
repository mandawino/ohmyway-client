export function areArraysEqual(array1, array2){
  const sortedArray2 = array2.sort()
  return array1.length === array2.length 
      && array1.sort().every((item, index) => item === sortedArray2[index])
}