function pipeFix(numbers){
 let result = [];
 for(let i = Math.min(...numbers) ; i <= Math.max(...numbers); i++){
   result.push(i);
 }
  return result;
}
console.log(pipeFix([2,1,4,3,7,9]));