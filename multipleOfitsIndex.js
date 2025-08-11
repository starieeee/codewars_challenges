function multipleOfIndex(array) {
  // good luck
  let res = [];
  for(let i = 0; i < array.length ; i++){
    if((array[i] === 0 && i === 0) || ( i !== 0 && array[i] % i === 0)){
      res.push(array[i]);
    }
  }
  return res;
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));