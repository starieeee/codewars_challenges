function well(x){
  let goodCount = x.filter(idea => idea === "good").length;
  if(goodCount === 0){
    return "Fail!";
  }
  return goodCount <= 2 ? "Publish!" : "I smell a series!";
}
console.log(well(["good", "bad", "good"]));