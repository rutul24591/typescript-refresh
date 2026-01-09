// 1. Interface in typescript
// Interfaces and types are used interchangably in 70-80 percent scenarios, but there are differences.
// Methods are mostly defined in interfaces and rarely seen in types
// Interface defines the structure the object(interface mostly used for objects while types mostly used for primitive type, tuples, etc)

interface Coffee {
  flavour: string;
  price: number;
  milk?: boolean;
}

const mocha: Coffee = {
  flavour: "Mocha",
  price: 25,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Abc Coffee shop" };
// s.id = // Cannot do as readonly

interface DiscountCalculator {
  (price: number): number;
}

const apply30: DiscountCalculator = (p) => p * 0.5;

interface CoffeeMachine {
  start(): void;
  stop(): void;
}

// When referencing interface, all methods should be implemented defined in interface(signature), can avoid using optional(?) flag. Eg stop?(): void
const coffeeMachine: CoffeeMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

/* 
Index Signatures i.e this object can have any string keys and each key's value must be a number
It lets you store dynamic keys you don't know ahead of time 
*/
interface CoffeeRatings {
  [flavour: string]: number;
}

const coffeeRatings: CoffeeRatings = {
  mocha: 4.5,
  americano: 4.3,
};

// Suppose you are using external libraries which have interface of its own,
// then chances are your code might have interface with same name. In that case both interface are merged.
// Not case with types

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Rutul",
  age: 34, // Comment this line out and check
};

// Interface can also be extended but works same like merging in above scenario
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {
  // Some code
}
