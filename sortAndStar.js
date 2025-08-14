function twoSort(s) {
  s.sort();
  let first = s[0];
  return first.split('').join("***");
}
console.log(twoSort(["cat", "bat", "dog"]));c