// String return
function enough(cap, on, wait) {
  // your code here
  let tol = on + wait;
  if(tol <= cap){
    return `He can fit all ${wait} passengers`;
  }
  else{
    let notFit = tol - cap;
    return `He can't fit ${notFit} of the ${wait}`;
  }
}
console.log(enough(10,5,5));


