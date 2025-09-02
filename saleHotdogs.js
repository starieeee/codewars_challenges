function saleHotdogs(n){
  let pricePerUnit = n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
  return n * pricePerUnit;
}
console.log(saleHotdogs(5));