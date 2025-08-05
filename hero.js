function hero(bullets, dragons){
//Get Coding!
//   if hero has no bullets, return false
  if(bullets === 0){
    return false;
  }
//   if dragons has no longer exist, return true
  if(dragons === 0){
    return true;
  }
//   if bullet is greater than the bullets use to kill dragon, return true
  if(bullets >= dragons *2){
    return true;
  }
//   if the hero does not have enough bullet, return false
  return false;
}
console.log(hero(0, 2));
