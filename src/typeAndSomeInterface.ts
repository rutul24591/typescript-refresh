// Types and Interfaces in TypeScript

// 1. Type Alias
type Person = {
  name: string;
  age: number;
  greet: () => string;
};

// Below 2 functions have same structure or signature for 'person' parameter.
function introduce(person: { name: string; age: number; greet: () => string }) {
  console.log(`Hello, I'm ${person.name}, and I'm ${person.age} years old.`);
}

function someOtherFunction(person: {
  name: string;
  age: number;
  greet: () => string;
}) {
  console.log(person.greet());
}

// With Type Alias, we can avoid repeating the same structure.
function introduceWithTypeAlias(person: Person) {
  console.log(`Hello, I'm ${person.name}, and I'm ${person.age} years old.`);
}

// Why use Interface over Type Alias with example of Animal. It won't cause any error here, but in complex scenarios, interfaces provide better error checking and autocompletion.
type DogType = {
  breed: string;
  age: number;
  bark?: () => string;
};

class DogWithTypeAlias implements DogType {
  breed = "German Shepherd";
  age = 3;
}

// 2. Interface
type CupSize = "small" | "medium" | "large";

interface CupSizeInterface {
  size: CupSize;
}
// class CoffeeOrder implements CupSize { // A class can only implement an `object` type or `intersection of object types` with statically known members.
// So CupSize being a union of literal types cannot be implemented by a class.
// }

// With classes we can normally use interfaces to easily define the structure.
class CoffeeOrder implements CupSizeInterface {
  size: "small" | "large" = "large";
}

type Response = { ok: true } | { ok: false; error: string };
// type Response = {ok: true | false}; // this works

// class ApiResponse implements Response {
//   //A class can only implement an object type or intersection of object types with statically known members.
//   ok: boolean = true;
// }

// 3. Union (` | `)

type coffeeType = "espresso" | "latte" | "cappuccino"; // Defining types this way is called Literal types

function orderCoffee(type: coffeeType): string {
  // coffeeType is a union of 3 literal types.
  return `You ordered a ${type}.`;
}

// 4. Intersection (` & `)
type BaseChai = { teaLeaves: number };
type Extra = { masala: boolean };

type MasalaChai = BaseChai & Extra; // Intersection type combining BaseChai and Extra

const cup: MasalaChai = {
  teaLeaves: 5,
  masala: true,
};

// 5. Optional Properties

type User = {
  username: string;
  email?: string; // optional property. It should be string if provided. Optional properties should always be at the end of the type/interface.
};

const user1: User = {
  username: "Rascal922",
};

const user2: User = {
  username: "CoderGal",
  email: "coder434@gmail.com",
};

// 6. Readonly Properties

type Point = {
  readonly x: number;
  y: number;
};

const p1: Point = { x: 10, y: 20 };
// p1.x = 15; // Error: Cannot assign to 'x' because it is a read-only property. --- IGNORE ---
p1.y = 25; // Allowed as 'y' is not readonly
