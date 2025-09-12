// Say hello w name and location
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));