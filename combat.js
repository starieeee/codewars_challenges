function combat(health, damage) {
  // Write your code here
  const newHealth = health - damage;
  return newHealth < 0 ? 0 : newHealth;
}
console.log(combat(100, 40));