function monkeyCount(n) {
// your code here
  let tolMonkey = [];
  for(let i = 1; i <= n; i++){
    tolMonkey.push(i);
  }
  return tolMonkey;
}
console.log(monkeyCount(10));