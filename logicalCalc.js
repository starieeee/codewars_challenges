function logicalCalc(array, op){
  //your code here
  return array.reduce((a, b) =>{
    if (op === "AND"){
      return a && b;
    }
    else if(op === "OR"){
      return a || b;
    }
    else if(op === "XOR"){
      return a !== b;
    }
  });
}