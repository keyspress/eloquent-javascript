// function countBs(word) {
//   let letterFound = ''
//   for(let i = 0; i < word.length; i++) {
//     if (word.charAt(i) === 'B') {
//       letterFound += word.charAt(i)
//     }
//   }
//   return letterFound.length
// }

function countChar(char) {
  return function(word) {
    let letterFound = ''
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === char) {
        letterFound += word.charAt(i)
      }
    }
    return letterFound.length
  }
}

const countBs = countChar('B')

console.log(countBs('BBBB'))
console.log(countBs('hhff'))
console.log(countBs('bBnm'))