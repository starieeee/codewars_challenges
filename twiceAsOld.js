// father age = 2 * son age
// x is for the years ago or many years he will be
// Father age(The age that equal to Son age) = fatherAge - x
// Son age (The age that equal to Father age) = sonAge - x
// fatherAge - x = 2 * (sonAge - x)
// x = Math.abs(fatherAge - 2*sonAge);

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - 2*sonYearsOld);
}
console.log(twiceAsOld(45, 20));