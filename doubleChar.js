function doubleChar(str){
    return str.split('').map(c => c + c).join('');
}
console.log(doubleChar("star")); 