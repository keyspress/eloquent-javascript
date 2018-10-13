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
  testArr = newArrValue
}

testArr = [1,2,3,4,5]

// console.log(reverseArray(testArr))
// console.log(testArr)
reverseArrayInPlace(testArr)
console.log(testArr)