var countSheep = function (num){
  //your code here
  if(num < 0){
    return '';
  }
  
  let result = '';
  for(let i = 1; i <= num; i++){
    result += `${i} sheep...`;
  }
  return result;
}
console.log(countSheep(3));