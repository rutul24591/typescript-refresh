// Functions in typescript

function makeCoffee(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeCoffee("Espress", 2); // Try adding one more param or make the 2 as string, it immediately warns.

// Data typing what gets returned
function getCoffeePrice(): number {
  return 25;
}

// Handling null scenario
function makeOrder(order: string): string | null {
  if (!order) return null; // It will complain if null is not a returned type included
  return order;
}

// Handling nothing returned scenario. Void indicates nothing gets returned from the function
function logCoffee(): void {
  console.log("Coffee is brewing");
}

// optional parameter. Always written at the end of params
function orderCoffee(type?: string) {}

// default parameter. Always written at the end of params
function orderCoffee2(type: string = "Mocha") {}

// Return type inference. If no return type is provided, ts infers what is returned
function getCoffeePrice2() {
  return 25;
}
