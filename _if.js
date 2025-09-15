function _if(bool, func1, func2) {
  // ...
  return bool ? func1() : func2();
}
_if(true, () => console.log('true'), () => console.log('false'));