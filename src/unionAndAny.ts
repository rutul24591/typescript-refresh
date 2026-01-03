// 1. Union

let subscriber: number | string = "1000K"; // union type. Can be number or string.
subscriber = 1000000;
console.log(`Subscriber count is: ${subscriber}`);

let apiRequestStatus: "loading" | "success" | "error"; // literal union type.
apiRequestStatus = "loading";
console.log(`API Request Status: ${apiRequestStatus}`);
apiRequestStatus = "success";
console.log(`API Request Status: ${apiRequestStatus}`);
// apiRequestStatus = "failed"; // Error: Type '"failed"' is not assignable to type '"loading" | "success" | "error"'. --- IGNORE ---

// 2. any
let randomValue: any = 10; // 'any' type can hold any value. Any is like "I don't care about the type". No need to explicitly define type.
console.log(`Random Value: ${randomValue}`);
randomValue = "Now I'm a string";
console.log(`Random Value: ${randomValue}`);
randomValue = true;
console.log(`Random Value: ${randomValue}`);

let orders = ["12", "24", "36", "48"];
let currentOrder: string | undefined; // can be string or undefined. Remove undefined to see the difference. Used for eg. api data can come or be undefined.

for (let order of orders) {
  if (order === "24") {
    currentOrder = order;
    break;
  }
  currentOrder = "96";
}

console.log(`Current Order: ${currentOrder}`);

// 3. Unknown - You don't know now what type it is, but you will find out later. It requires type checking before usage.
let anotherValue: unknown = 20; // 'unknown' type can hold any value but is safer than 'any'.
console.log(`Another Value: ${anotherValue}`);
anotherValue = "Now I'm also a string";
console.log(`Another Value: ${anotherValue}`);
anotherValue = false;
console.log(`Another Value: ${anotherValue}`);

// To use 'anotherValue' safely, we need to perform type checking.
// Type narrowing: refining a broad type to a more specific one.
// Type narrowing with 'typeof' checks. With objects and arrays, use 'instanceof' or other checks.
if (typeof anotherValue === "string") {
  console.log(`String length: ${anotherValue.length}`);
} else if (typeof anotherValue === "number") {
  console.log(`Number value: ${anotherValue}`);
} else {
  console.log("Another Value is neither string nor number.");
}

// Difference between 'any' and 'unknown':
// 'any' allows all operations without checks, while 'unknown' requires type checks before usage.
