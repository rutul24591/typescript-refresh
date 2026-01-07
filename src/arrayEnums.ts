// Arrays in Typescript

const coffeeFlavours: string[] = ["Mocha", "Americano", "Cappachino"];
const coffeePrice: number[] = [25, 45, 75];

const rating: Array<number> = [4.5, 4.3, 5]; // Can be defined this way as well

// Working with array of objects
type CoffeeMenu = {
  name: string;
  price: number;
  rating: Number;
};

const menu: CoffeeMenu[] = [
  {
    name: "Mocha",
    price: 25,
    rating: 4.5,
  },
  {
    name: "Americano",
    price: 45,
    rating: 4.3,
  },
  {
    name: "Cappachino",
    price: 75,
    rating: 5,
  },
];

// Readonly array - once defined we cannot manipulate later
const cities: readonly string[] = ["Ahmedabad", "Ooty"];
// cities.push("Bangalore");  // Will not allow

// Multi-dimensional arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 2. Tuples in Typescript
let coffeeTuple: [string, number]; // Multiple data types in an array. Provides some more restrictions than array. Order matters with values
coffeeTuple = ["Mocha", 25];
// coffeeTuple = [20, "Mocha"];  // Cause error

let userInfo: [string, number, boolean?];
userInfo = ["rutul", 200]; // Works
userInfo = ["amin", 250, true]; // Works. Order should be maintained

// Readonly tuples - Once defined we cannot change them
const location1: readonly [number, number] = [28.66, 32.22];

// Named tuples - Better to use as we can know what to provide for defined data type
const coffeeItems: [name: string, price: number] = ["Mocha", 25];

// Possible to push values in tuple
let tup: [string, number] = ["coffee", 10];
tup.push("chai");
tup.push("water");
tup.push(24); // Adding items in random order is permitted, but not recommended as it is hard to debug.

console.log("Tuple Tup:", tup);

// 3. Enums in Typescript - Limit choices

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;

enum Status {
  PEDNING = 100,
  SERVED, // 101 automatically takes up value
  CANCELLED, // 102 automatically takes up next number as value
}

console.log(Status);

enum UserType {
  ADMIN = "admin",
  TESTER = "tester",
  DEVELOPER = "developer",
}

function getUserData(type: UserType) {
  console.log(`User is a : ${type}`);
}

getUserData(UserType.DEVELOPER); // Correct
// getUserData("developer"); // Won't work as we have asked to use UserType enum and values could be the 3 keys only.

// The below enum works, but standard practice is to use all same types in enums
// i.e If number, all keys should be numbers only. If string, all keys should be string only.
// Not recommended to mix types
enum RandomEnum {
  ID = 1,
  NAME = "coffee",
}

// RandomEnum.ID = 2; // Enums are itself readonly, will warn.

// Below is also valid but seen in codebases.
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const high = Sugars.HIGH;
