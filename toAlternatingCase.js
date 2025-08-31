String.prototype.toAlternatingCase = function(){
    let newStr = '';
    for(let i = 0; i < this.length; i++){
        if(this[i] === this[i].toLowerCase()){
            newStr += this[i].toUpperCase();
        }
        else{
            newStr += this[i].toLowerCase();
        }
    }
    return newStr;
}
console.log("I am a String".toAlternatingCase());
