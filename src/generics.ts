// Generics in typescript
// Generics in TypeScript provide a way to create reusable code components that work with a variety of data types
// while maintaining type safety. Used to generate templates used by many.
// Generics are widely used in API responses, Form states in react, etc.

// Basic generic function.
// T does not have any literal meaning. It only indicates T is string,
// param will be T and return type will be array of string. Same for number
// Check examples below. Mostly used in libraries
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Mocha"); // ✅
wrapInArray(42); // ✅
wrapInArray({ flavour: "Americano" }); // ✅

function pair<A, B>(a: A, b: B): [A, B] {
  // return [b, a]; // 🛑
  return [a, b];
}

pair("mocha", "test"); // ✅
pair("mocha", 20); // ✅
pair("mocha", { flavour: "mocha", item: 2 }); // ✅

// To grab data, these types of structure or generics are build which are general functions to generalize.
// With can build generic types as well as interfaces. classes, partial, pick, etc is also available with generics.

// Generic Interface
interface Box<T> {
  content: T;
}

//Use
const numberBox: Box<number> = { content: 10 }; // ✅
const stringBox: Box<string> = { content: "myStr" }; // ✅
// const mixStringAndNumber: Box<string> = {content: 10}; // 🛑

// Partial
// Partial<T>

// Generics in API
interface ApiPromise<T> {
  status: number;
  data: T;
}

const response: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: {
    flavour: "Mocha",
  },
};
