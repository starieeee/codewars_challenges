function binaryArrayToNum(arr){
    return parseInt(arr.join(''), 2);
}
console.log(binaryArrayToNum([1, 0, 1, 0, 1]));