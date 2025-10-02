function array(string){
    if(!string) return null;

    part = string.split(',');
    if(part.length <= 2) return null;

    return part.slice(1, -1).join(" ");
}
console.log(array("1, 2, 3, 4, 5"));