function dnaToRna(data){
    return data.replace(/T/g, 'U');
}
console.log(dnaToRna("GATTACA"));