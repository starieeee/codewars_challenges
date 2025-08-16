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

// Num return
function isEnough(maxHold, currentHold, wait){
    let total = currentHold + wait;
    return total <= maxHold ? 0 : total - maxHold;
}
console.log(isEnough(100,60,50));

