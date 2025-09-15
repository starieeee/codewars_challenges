function getSize(width, height, depth){
  let surfaceArea = 2*depth*width + 2*depth*height + 2*width*height;
  let volume = width * height * depth;
  return [surfaceArea, volume];
}
console.log(getSize(10, 5, 25));
