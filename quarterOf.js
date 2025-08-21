const quarterOf = (month) => {
  // Your code here
  if(month <= 3){
    return 1;
  }
  else if(month <= 6){
    return 2;
  }
  else if(month <= 9){
    return 3;
  }
  else if(month <= 12){
    return 4;
  }
  else{
    return "Invalid input";
  }
}
console.log(quarterOf(11));