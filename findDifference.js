function findDifference(a, b) {
  //loading...
  let firstArr = a.reduce((a,b) => a*b, 1);
  let secondArr = b.reduce((a,b) => a*b, 1);
  let difference = Math.abs(firstArr - secondArr);
  return difference;
}
console.log(findDifference([2,2,3], [5,4,1]));