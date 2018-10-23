function every (array, check) {
  const filtered = array.filter(item => check(item))
  return filtered.length === array.length
}

function some (array, compare) {
  test = false
  array.forEach(item => {
    if(compare(item)) {
      test = true
    } 
  })
  return test
}



console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false