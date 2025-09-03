// Define your circular object here
let circular = {};
circular.value = "Hello World"
circular.self = circular;

console.log(circular.value);
console.log(circular === circular.self);
console.log(circular.self === circular.self.self);


