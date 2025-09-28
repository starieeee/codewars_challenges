function multiply(number){
  // Return the number multiplied by 5 to the power of the number of digits in the number
  return number * Math.pow(5, Math.abs(number).toString().length);
}
console.log(multiply(3));