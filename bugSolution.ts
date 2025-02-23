function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // No Error
let result2 = add(1, "2"); // Throws an error at runtime because of the input validation
console.log(result); 