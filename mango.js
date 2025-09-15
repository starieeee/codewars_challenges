function mango(quantity, price){
  let freeMango = Math.floor(quantity / 3);
  let paidMango = quantity - freeMango;
  return paidMango * price;
}
console.log(mango(9, 5));