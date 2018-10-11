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