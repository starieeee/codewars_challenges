function feast(beast, dish) {
//your function here
  return dish[0] === beast[0] && dish[dish.length - 1] === beast[beast.length-1];
}
console.log(feast("cat", "cake night"));