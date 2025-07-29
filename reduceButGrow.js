function reduceGrow(x){
    return x.reduce((a, b) => a*b,1);
}
console.log(reduceGrow([1, 2, 3, 4, 5]));
console.log(reduceGrow([1, 2, 3, 4, 5, 6]));

