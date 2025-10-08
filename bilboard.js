function billboard(name, price = 30){
  let tol = 0;
  for (let i = 0; i < name.length; i++){
    tol += price;
  }
  return tol;
}
console.log(billboard("Tepy"));