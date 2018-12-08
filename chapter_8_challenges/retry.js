function MultiplicatorUnitFailure() { }

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  let result;
  while(result !== typeof 'number'){
    primitiveMultiply(a, b)
  }
  return result
}

console.log(reliableMultiply(8, 8));
// → 64