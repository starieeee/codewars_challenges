function distinct(a) {
  return [...new Set(a)];
}
console.log(distinct([1,1,2,3,4,4]));