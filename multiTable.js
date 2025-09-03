function multiTable(number) {
  // good luck
  let res = [];
  for(let i = 1; i <= 10; i++){
    res.push(`${i} * ${number} = ${i * number}`);
  }
  return res.join('\n');
}
console.log(multiTable(5));