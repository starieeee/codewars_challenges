function removevowel(str){
    return str.toLowerCase().replace(/[aeiou]/g,'');
}
console.log(removevowel("Ello"));
