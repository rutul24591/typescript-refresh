// 1. Objects in Typescript
const coffee = {
  name: "mocha",
  isHot: true,
  price: 24,
};

// Typescript infers the type by default
// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

// Declaring object types
let coffee2: {
  name: string;
  price: number;
  isHot: boolean;
}; // Here coffee2 object is declared with no value assigned yet.

coffee2 = {
  name: "espresso",
  price: 50,
  isHot: false,
};

type Coffee = {
  name: string;
  price: number;
  ingredients: string[];
};

const latteCoffee: Coffee = {
  name: "Latte",
  price: 40,
  ingredients: ["Milk", "Sugar"], // Adding a number or boolean here will cause error as type provided is string[]
};

// !!!! Works
type Cup = { size: string };

let smallCup: Cup = { size: "250ml" };
let bigCup = { size: "500ml", material: "plastic" };

smallCup = bigCup; // This works as minimal properties of `Cup` are abided/followed ie. size is string.

// Works
type Brew = { brewTime: number };

const chai = { brewTime: 7, beans: "Darjeling" };
const coffeeBrew: Brew = chai;

// Doesn't Work
type User = {
  username: string;
  password: string;
};

const user1: User = {
  username: "Rutul Amin",
  password: "password", // if not provided typescript complains
};

// 2. Splitting out Data Types
type Item = { name: string; quantity: number };
type Address = { street: string; pinCode: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// 3. Partial - Make all properties in Data Type optional
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating Chai with", updates);
};

updateChai({ price: 22 });
// updateChai({isHot: 5}); // Will ask to provide same type for isHot
updateChai({}); // This is the real issue where empty objects could be passed and it wont complain

//Updating Objects (Patch Operations):
// The most common use case is when updating an existing object.
// You only need to provide the fields that are changing, not the entire object.
interface User1 {
  name: string;
  email: string;
  age: number;
}

function updateUser(user: User1, updates: Partial<User1>): User1 {
  return { ...user, ...updates };
}

const originalUser: User1 = {
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};
const updatedUser = updateUser(originalUser, {
  email: "new.email@example.com",
}); // Only email is provided

// 4. Required - Make all properties in Data Type required
interface Product {
  id: number;
  name: string;
  description?: string; // Optional description
}

// Creates a new type where 'description' is also required
type FullProduct = Required<Product>;

let product1: FullProduct = {
  id: 101,
  name: "Laptop",
  description: "Powerful business laptop", // Description must be provided
};

// let product2: FullProduct = {
//    id: 102,
//    name: "Mouse" // This would cause a TypeScript error because 'description' is missing!
// };

// 5. Pick - From T, pick a set of properties whose keys are in the union K
interface Person {
  name: string;
  age: number;
  email: string;
  address: string;
}

// Create a new type with only 'name' and 'email'
type NameAndEmail = Pick<Person, "name" | "email">;

const userContact: NameAndEmail = {
  name: "John Doe",
  email: "john@example.com",
};

// The following would cause a TypeScript error because 'age' and 'address' are not in NameAndEmail:
// const fullPerson: NameAndEmail = {
// name: 'John Doe',
// email: 'john@example.com'
// age: 30,
// };

// 6. Omit - Construct a type with the properties of T except for those in type K.

type Person1 = {
  name: string;
  age: number;
  email: string;
  phone: number;
};

type PersonInfo = Omit<Person1, "phone">;

const userContact1: PersonInfo = {
  name: "John Doe",
  email: "john@example.com",
  age: 24,
  // phone: 9348383884    // This will cause an error as it is Omitted
};
