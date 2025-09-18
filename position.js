function position(letter){
    let pos = letter.charCodeAt(0) - 96
    return `Position of alphabet ${pos}`;
}
console.log(position('a'));
