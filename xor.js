// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

function xor(a, b) {
  // TODO: Program Me
  return a !== b;
}
console.log(xor(1,0));