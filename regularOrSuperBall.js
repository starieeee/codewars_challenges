// Method 1
// class Ball{
//     constructor (balltype = "regular"){
//         this.balltype = balltype;
//     }
// }
// let ball1 = new Ball();
// let ball2 = new Ball("superball");

// console.log(ball1);
// console.log(ball2);

// method 2
var Ball = function(ballType) {
  this.ballType = ballType || "regular";
};
 let ball1 = new Ball();
 let ball2 = new Ball("super");

console.log(ball1);
