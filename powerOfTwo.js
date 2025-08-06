// it will take a + num
// num will be an array
function powersOfTwo(n){
  let result = [];
// loop
  for(let i = 0; i <= n; i++){
    result.push(Math.pow(2, i));
  }
  return result;
}
console.log(powersOfTwo(1))
//  2 => [1, 2] (power w the index they r in)