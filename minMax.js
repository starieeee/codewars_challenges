var min = function(list){
    if(list.length === 0){
      return 0;
    }
  return Math.min(...list);
}
console.log(min([4,6,2,1,9,63,-134,566]));
var max = function(list){
    if(list.length === 0){
      return 0;
    }
    return Math.max(...list);
}
console.log(max([4,6,2,1,9,63,-134,566]));