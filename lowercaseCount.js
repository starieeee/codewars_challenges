function lowercaseCount(str){
    let low = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i].toUpperCase() && str[i] === str[i].toLowerCase()){
            low += 1;
        }
    }
    return low;
}
console.log(lowercaseCount("abc123"));