let Ghost = function() {
  // your code goes here
  const colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};
let ghost = new Ghost();
console.log(ghost.color);