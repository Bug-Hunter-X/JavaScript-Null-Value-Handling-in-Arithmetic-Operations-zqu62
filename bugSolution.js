function foo(a, b) {
  // Explicitly handle null values
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b;  

  return a + b; // Perform addition
}

console.log(foo(10, null)); // Output: 10
console.log(foo(null, 20)); // Output: 20
console.log(foo(10, 20));   // Output: 30
console.log(foo(null, null)); // Output: 0