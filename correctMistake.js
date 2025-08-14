function correct(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "5") {
      result += "S";
    } else if (string[i] === "0") {
      result += "O";
    } else if (string[i] === "1") {
      result += "I";
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(correct("L0ND0N"));     // LONDON
console.log(correct("DUBL1N"));     // DUBLIN
console.log(correct("51NGAP0RE"));  // SINGAPORE

// Second method

function correctString(str){
    return str.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}
console.log(correctString("L0ND0N"));     
