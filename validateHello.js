function validateHello(greetings) {
  const lowerGreeting = greetings.toLowerCase();
  const res =  ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  return res.some(greeting => lowerGreeting.includes(greeting));
}
console.log(validateHello("Hello"));
