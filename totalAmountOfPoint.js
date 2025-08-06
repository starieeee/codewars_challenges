// It will store in array
// array, will take num, +
// ["x:y",....] x is our score while y is our oponent score
// 10 rounds, so there 10 objects in the array
function points(games) {
  let point = 0;
  for(let i = 0; i < games.length; i++){
    let [x, y] = games[i].split(':').map(Number);
//     Condition
    if(x > y){
      point += 3;
    }
    else if(x < y){
      point += 0;
    }
    else{
      point += 1;
    }
  }
  return point;
}
console.log(points(["3:1", "2:2", "0:1","3:1", "2:2", "0:1", "2:9"]));
// ["3:1", "2:2", "0:1"...]
// 0 <= x <= 4 it means we lost
// 0 <= y <= 4 they lost