// The below is fine, but typescript complains "Property 'flavour' and 'price' has no initializer and is not definitely assigned in the constructor"
// class Coffee {
//   flavour: string;
//   price: number;
// }

class MyCoffee {
  flavour: string;
  // price: number;

  // Adding constructor is correct and will resolve above issue

  // constructor(flavour: string, price: number){
  //   this.flavour = flavour;
  //   this.price = price;
  // }

  constructor(flavour: string) {
    this.flavour = flavour;
    console.log(this); // this points to the object creating the class ie MochaCoffee
  }
}

const mochaCoffee = new MyCoffee("Mocha");
mochaCoffee.flavour = "Americano";

class Coffee3 {
  // Access modifiers
  public flavour: string = "Americano"; // Accessible inside and outside class as well

  private secretIngredients = "Cinnamon"; // Accessible within the class only. Use _ with all private values names, standard.

  getSecretIngredient() {
    return this.secretIngredients; // OK. This way you can share the private data
  }
}

const coffee2 = new Coffee3();
coffee2.flavour = "Mocha";
coffee2.getSecretIngredient(); // This way you can get the private variable defined in class. Type `coffee2.` and see suggestions

// Other way to declare private variables using #
class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const wall8 = new Wallet();
wall8.getBalance();

// With Protected, variables and functions are accessible within the class or where the class is extended.
class Shop {
  protected shopName = "Chai Shop";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // This is OK
  }
}

// Readonly - once assigned we cannot change.
class Cup {
  readonly capacity: number = 500;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// Getters and setters

class ModernChai {
  private _sugar = 2;

  getSugar() {
    return this._sugar;
  }

  setSugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}

const mc = new ModernChai();

mc.getSugar();
mc.setSugar(4);
mc.getSugar();

// Static properties in TS - Same as js
// the static keyword defines methods, properties, or
// initialization blocks that belong to the class itself,
// rather than to an instance (object) of that class.

class MyCoffeee {
  static shopName = "Gabbar Coffee";

  constructor(public flavour: string) {}
}
const coffee4 = new MyCoffeee("Mocha");
// coffee4.shopName;  // Error cannot access as it belongs to class itself rather than the object
console.log(MyCoffeee.shopName); //  ✅

// Compisition - Sometimes it is preferred by many to use composition instead of Inheritance.
class Heater {
  heat() {
    console.log("Heating");
  }
}

class Electronics {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat();
  }
}

// Abstract class
// Sometimes we need to make classes where objects cannot be created.

abstract class Drink {
  abstract make(): void;
}

class FruitJuice extends Drink {
  // make(){  // Non-abstract class 'FruitJuice' does not implement inherited abstract member make from class 'Drink'.

  // }

  make() {
    console.log("Grinding juice");
  }
}

// Abstraction
// Abstraction can be defined as the concept of hiding the inner complex workings of an object and exposing only the essential features to the user.

class Car {
  #checkEngine() {
    // Complex internal engine check logic is hidden
    console.log("Engine is healthy.");
  }

  startEngine() {
    this.#checkEngine();
    console.log("Car engine started."); // Simple public interface
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: Engine is healthy. Car engine started.
// myCar.#checkEngine() // Throws an error (private access)

/* 
Encapsulation

Encapsulation bundles data and methods within a class, controlling access to its internal state using access modifiers 
(public, private, protected) to hide implementation details and prevent direct modification, 
ensuring data integrity through controlled access points like getters and setters, 
promoting maintainability and robust code.
*/

class BankAccount {
  #balance; // Private field, only accessible inside the class

  constructor(initialBalance: number) {
    this.#balance = initialBalance;
  }

  // Public method to deposit funds with validation
  deposit(amount: number): void {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  // Public method to withdraw funds with validation
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  }

  // Public method to get the current balance (read-only access)
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50); // Output: Deposited: $50. New balance: $150
account.withdraw(25); // Output: Withdrawn: $25. New balance: $125
console.log(account.getBalance()); // Output: 125

// Attempting to access the private field directly results in an error:
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
