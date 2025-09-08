function hello(name) {
  if(!name) return "Hello, World!";
  let returnName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${returnName}!`;
}
console.log(hello("John"));