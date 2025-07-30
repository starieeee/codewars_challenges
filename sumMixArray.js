function sumMixArr(array){
    return array.reduce((a, b) => Number(a) + Number(b), 0);
}
console.log(sumMixArr([1, '2', 3, '4', 5])); 