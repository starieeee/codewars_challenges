function calculator(a,b,sign){
  // Your code here...
  if(typeof a === 'string' || typeof b === 'string'){
    return 'unknown value';
  }
  switch (sign){
      case '+':
        return a + b;
        break;
      case '-':
        return a - b;
        break;
      case '*':
        return a * b;
        break;
      case '/':
        return a / b;
        break;
      default:
        return "unknown value"
      break;
  }
}
console.log(calculator(10, 7, '*'));