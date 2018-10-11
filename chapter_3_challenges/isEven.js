// function isEven(num) {
//   if (num === 0) return true
//   else if (num === 1) return false
//   else if ((num % 2 === 0) && ((num -2) % 2 === 0)) return true
//   else return false
// }

function isEven(num) {
  if ((num === 0) || ((num % 2 === 0) && ((num - 2) % 2 === 0))) return true
  else return false
}

console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(66))
console.log(isEven(33))

// author solution
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }