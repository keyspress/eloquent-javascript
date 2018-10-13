function reverseArray (arr) {
  let newArr = []
  arr.map(item => {
    newArr.unshift(item)
  })
  return newArr
}

function reverseArrayInPlace (arr) {
  newArrValue = []
  arr.map(item => {
    newArrValue.unshift(item)
  })
  console.log(newArrValue)
  arr = newArrValue
  return arr
}

testArr = [1,2,3,4,5]

// console.log(reverseArray(testArr))
// console.log(testArr)
reverseArrayInPlace(testArr)
console.log(testArr)

// function reverseArray(array) {
//   let output = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     output.push(array[i]);
//   }
//   return output;
// }

// function reverseArrayInPlace(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }