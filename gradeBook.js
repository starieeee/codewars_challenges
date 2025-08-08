function getGrade (s1, s2, s3) {
  // Code here
  let avrg = (s1 + s2 + s3)/3;
  console.log(avrg);
  if(avrg >= 0 && avrg < 60){
    return "F";
  }
  else if(avrg < 70){
    return "D";
  }
  else if(avrg < 80){
    return "C";
  }
  else if(avrg < 90){
    return "B";
  }
  else if (avrg <= 100){
    return "A";
  }
  else{
    return 0;
  }
}
console.log(getGrade(20, 20, 20));