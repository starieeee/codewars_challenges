// we will humanYears(years ago), and then we will calculate it into catYears and dogyears
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;
  if(humanYears === 1){
    catYears += 15;
    dogYears += 15;
  }
  else if(humanYears === 2){
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  else{
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears -2) * 5;
  }
  return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1))
// humanYears => (catYears) 15 + 9 + (humanYears - 2) * 4
// (dog) 15 + 9 + (humanYears - 2) * 5
