function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b) => a - b))]
}
console.log(mergeArrays([1, 3, 5, 7, 9], [2,4,6,8,10]));