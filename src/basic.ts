function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Rutul"));

// This will cause a TypeScript error because 42 is not a string.
// If latest typescript transpiler is used, it may transpile without error but will throw a runtime error.
// console.log(greet(42));

function greet2(person: string): string {
  return `Hello ${person}, Welcome to TypeScript!`;
}

const userName: string = "Rocky Balboa bhai";
console.log(greet2(userName));
