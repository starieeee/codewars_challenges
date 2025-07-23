function findNeedle(hayStack){
    return "found the needle at position " + hayStack.indexOf("needle");
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
