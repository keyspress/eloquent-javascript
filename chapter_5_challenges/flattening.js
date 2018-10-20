const arrays = [[1, 2, 3], [4, 5], [6]];

const result = arrays.reduce((a, b) => {
  return a.concat(b)
})

console.log(result)
// → [1, 2, 3, 4, 5, 6]
