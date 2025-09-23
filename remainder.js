function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if (m === 0 || n === 0){
    return NaN;
  }
  let larger = Math.max(n, m);
  let smaller = Math.min(n, m);
  
  return larger % smaller;
}
console.log(remainder(17, 5));
console.log(remainder(72, 13));
console.log(remainder(0, -1));
console.log(remainder(0, 1));