function chromosomeCheck(sperm) {
  return sperm.toUpperCase() === "XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}
console.log(chromosomeCheck('XY'));