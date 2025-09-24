function stringClean(s){
  // Function will return the cleaned string
  return s.replace(/[0-9]/g, '');
}
console.log(stringClean('123456789'));