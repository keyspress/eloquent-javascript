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

// author solution
// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }