function isogram(x){
   x = x.toLowerCase();
    for(let i = 0; i < x.length; i++){
        for(let j = i+1; j < x.length; j++){
            if(x[i] === x[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(isogram("Kitty"));
console.log(isogram("Dermatoglyphics"));
