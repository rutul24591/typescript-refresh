// 1. Type Inference in TypeScript
// TypeScript can automatically infer types based on the assigned values.

let name = "Bhai of Steel"; // Implicitly typed as string. TS infers the type.

// name = 42; // Error: Type 'number' is not assignable to type 'string'. --- IGNORE ---

let drink = "chai"; // Implicitly typed as string.

// drink = true; // Error: Type 'boolean' is not assignable to type 'string'. --- IGNORE ---

let cups = Math.random() > 0.5 ? 10 : 5; // Implicitly typed as number.

// cups = "a lot"; // Error: Type 'string' is not assignable to type 'number'. --- IGNORE ---

let mugs = Math.random() > 0.5 ? 10 : "5"; // Implicitly typed as string | number (union type).

// mugs = true; // Error: Type 'boolean' is not assignable to type 'string | number'. --- IGNORE ---

// 2. Explicit Type Annotations in TypeScript
// You can explicitly specify types for variables.

let hero: string;
hero = "Ironman";
// hero = 100; // Error: Type 'number' is not assignable to type 'string'. --- IGNORE ---

hero = "Captain America";

let isAlive: boolean;
isAlive = true;
// isAlive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'. --- IGNORE ---

isAlive = false;

let age: number;
age = 45;
// age = "forty-five"; // Error: Type 'string' is not assignable to type 'number'. --- IGNORE ---

age = 50;

let mixed: string | number;
mixed = "Spiderman";
mixed = 30;
// mixed = false; // Error: Type 'boolean' is not assignable to type 'string | number'. --- IGNORE ---
