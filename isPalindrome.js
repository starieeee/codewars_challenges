function isPalindrome(x) {
  // your code here
  let lowerStr = x.toLowerCase();
  let palindrome = lowerStr.split('').reverse().join('');
  return lowerStr == palindrome;
}
console.log(isPalindrome("madam"));