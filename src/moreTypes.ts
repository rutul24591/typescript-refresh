// 1. Type Assertions in TypeScript
let response: any = "24"; // 'any' type can hold any value.

let numericLength: number = response.length; // Need to do type assertion to inform TS about the actual type.
console.log(`Numeric Length: ${numericLength}`);

numericLength = (response as string).length; // Using 'as' syntax for forceful type assertion.

type Book = {
  name: string;
};

let bookString = '{"name": "The Alchemist"}'; // JSON string representing a Book object. Assume coming from local storage or API.

let bookObject = JSON.parse(bookString) as Book; // Parsing JSON string and asserting it as Book type.

// Without type assertion with `as Book` above, it would throw error as TS doesn't know the structure of parsed object.
// No suggestions or autocompletion without type assertion. It is the intellisense extension which currently completes it.
console.log(bookObject.name);

const inputElement = document.getElementById("user-input") as HTMLInputElement; // Asserting the type of DOM element.
// Without type assertion above, TS only knows it is an HTMLElement, which doesn't have 'value' property.

// Difference between 'any' and 'unknown' with type assertion:
let value: any;

value = "Code";
value = [1, 34, 5];
value = true;
value.toUpperCase(); // No error, but may throw runtime error if 'value' is not string.

let value2: unknown;

value2 = "Code";
value2 = [1, 34, 5];
value2 = true;
// value2.toUpperCase(); // Error: Object is of type 'unknown'. Need type checking before usage.
if (typeof value2 === "string") {
  console.log(value2.toUpperCase()); // Safe to use after type checking.
}

try {
  // Some code that may throw an error
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Unknown error occurred.", error);
}

const data: unknown = "Hello, World!";
// const strData: string = data; // Error: Type 'unknown' is not assignable to type 'string'. Need type assertion or checking. --- IGNORE ---
const strData: string = data as string; // No error. Using type assertion to assign to string.

// 2. Never

type Role = "admin" | "user" | "guest";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirect to admin dashboard");
    return;
  } else if (role === "user") {
    console.log("Redirect to user homepage");
    return;
  }
  // role; // Without "guest" in Role type, this is unreachable and hovering over 'role' would show 'never' type.
  role; // this is reachable as "guest" is part of Role type.
}

function nothingGetsReturned(): never {
  while (true) {
    // Infinite loop, function never returns. There are cases like server that run indefinitely until interrupted.
  }
}
// nothingGetsReturned(); // Uncommenting this will cause the program to run indefinitely.

function throwError(message: string): never {
  throw new Error(message); // Function always throws error, never returns a value.
}

// throwError("This is a fatal error!"); // Uncommenting this will throw an error and stop execution.
