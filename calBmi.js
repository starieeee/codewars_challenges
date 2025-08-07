// bmi = weight / height ^ 2
// height cm
function bmi(weight, height) {
  let cal = weight / Math.pow(height, 2);
  console.log(cal.toFixed(2));
  //   Condition
  if (cal <= 18.5) {
    return "Underweight";
  } else if (cal <= 25.0) {
    return "Normal";
  } else if (cal <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(bmi(66, 1.6));
// console.log(bmi(66, 1.60)) => <= 18.5 return Underweight, <= 25.0 return Normal, <= 30 return Overweight, > 30 return Obese
