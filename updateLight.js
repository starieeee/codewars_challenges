function updateLight(current) {
  
  //your code here!
  if( current === "green"){
    return "yellow";
  }
  else if(current === "yellow"){
    return "red";
  }
  else if(current === "red"){
    return "green";
  }
  else{
    return "incorrect input";
  }
}
console.log(updateLight("green"));