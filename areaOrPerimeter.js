const areaOrPerimeter = function(l , w) {
  // Return your answer
  if(l === w){
    return l * w;
  }
  else{
    return 2 * (l + w);
  }
};
console.log(areaOrPerimeter(3,3));
console.log(areaOrPerimeter(4,3));