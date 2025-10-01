function cubeChecker(volume, side){
  if (volume <= 0 || side <= 0) return false;
  return volume === side ** 3 ? true : false;
};
console.log(cubeChecker(8, 2));