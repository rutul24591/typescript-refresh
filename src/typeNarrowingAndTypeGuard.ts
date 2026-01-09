// 1. Type Narrowing.
// Type narrowing: refining a broad type to a more specific one.
// Type narrowing with 'typeof' checks. With objects and arrays, use 'instanceof' or other checks.

function processValue(value: "small" | "medium" | "large" | number) {
  if (value === "small") {
    return "Processing a small value.";
  }
  if (value === "medium") {
    return "Processing a medium value.";
  }
  if (value === "large") {
    return "Processing a large value.";
  }
  // Ensuring this is number before returning. No string can reach here
  return value;
}

// with classes
class Dog {
  bark() {
    return "Woof!";
  }
}

class Cat {
  meow() {
    return "Meow!";
  }
}

function interactWithPet(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    return pet.bark();
  } else if (pet instanceof Cat) {
    return pet.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

console.log(interactWithPet(myDog));
console.log(interactWithPet(myCat));

// 2. Type Guards.
// Type guards are functions that determine if a value is of a specific type.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printLength(value: unknown) {
  if (isString(value)) {
    console.log(`String length: ${value.length}`);
  } else {
    console.log("Value is not a string.");
  }
}

printLength("Hello, TypeScript!");
printLength(42);

type coffeeOrder = {
  type: string;
  sugar: number;
};

// Ensures whatever is returned will be of type coffeeOrder
function isCoffeeOrder(order: any): order is coffeeOrder {
  return (
    typeof order === "object" &&
    order !== null &&
    "type" in order &&
    typeof order.type === "string" &&
    "sugar" in order &&
    typeof order.sugar === "number"
  );
}

function processOrder(order: coffeeOrder | string) {
  if (isCoffeeOrder(order)) {
    return `Order received: ${order.type} with ${order.sugar} sugar(s).`;
  }
  return `Invalid order: ${order}`;
}

console.log(processOrder({ type: "Latte", sugar: 2 }));
console.log(processOrder("Just water"));

type adminUser = {
  name: string;
  role: "admin";
  permission: "read" | "write" | "execute";
};

type regularUser = {
  name: string;
  role: "user";
  subscriptionLevel: "free" | "premium";
  permission?: "read";
};

type devUser = {
  name: string;
  role: "dev";
  permission: "read" | "write";
};

type user = adminUser | regularUser | devUser;

function getAccountType(account: user): string | undefined {
  switch (account.role) {
    case "admin":
      return `Hello ${account.name}, you have full access as an Admin.`;
    case "user":
      return `Hello ${account.name}, you have limited access as a User.`;
    case "dev":
      return `Hello ${account.name}, you have developer access.`;
    default:
      break;
  }
}

// Check if property exists in object
function getSubscriptionLevel(account: adminUser | regularUser | devUser) {
  if ("subscriptionLevel" in account) {
    return `Subscription Level: ${account.subscriptionLevel}`;
  }
}

// Type guard for array of strings. Industry standard way to check if unknown is string array.
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
