function range (start, end, step) {
  let numList = []
  let inc;
  if(step) {
    inc = step
  } else {
    inc = 1
  }
  num = start
  if (inc < 0) {
    while (num >= end) {
      numList.push(num)
      num += inc
    }
  } else {
    while (num <= end) {
      numList.push(num)
      num += inc
    }
  }
  
  return numList
}

function sum (numArr) {
  let sum = 0
  for (let i = 0; i < numArr.length; i++){
    sum += numArr[i]
  }
  return sum
}

console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(sum(range(1,10)))
console.log(range(5, 2, -1));