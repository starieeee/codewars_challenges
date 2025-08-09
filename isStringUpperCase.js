String.prototype.isUpperCase = function() {
  // your code here
  if(this.length == 0) return false;
  return this.toString() === this.toUpperCase();
}
console.log("c".isUpperCase());
console.log("C".isUpperCase()); 
console.log("hello I AM DONALD".isUpperCase());
console.log("HELLO I AM DONALD".isUpperCase());
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase());
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase());