function isVow(a){
    return a.map(num => [97, 101, 111, 105, 117].includes(num) ? String.fromCharCode(num) : num);
}
console.log(isVow([111, 33, 4, 5, 117]));
