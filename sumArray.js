function sum(numbers){
    return numbers.reduce((a,b) => a + b, 0);
}
console.log(sum([1, 3.2, 4, 2.8]));
