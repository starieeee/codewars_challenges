function remove (string) {
  //coding and coding....
  if (string[string.length - 1] === '!') {
    return string.slice(0,-1);
  }
  return string;
}
console.log(remove("Hello!"));