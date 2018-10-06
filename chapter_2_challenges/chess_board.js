let size = 11;
let board = '';
for (let i = size; i > 0; i--){
  if(i % 2 !== 0) {
    for (let i = size; i > 0; i--) {
      board += ' #'
    }
    board += '\n'
  } else {
    for (let i = size; i > 0; i--) {
      board += '# '
    }
    board += '\n'
  }
}

console.log(board)

// Author Solution
// let size = 8;

// let board = '';

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += ' ';
//     } else {
//       board += '#';
//     }
//   }
//   board += '\n';
// }

// console.log(board);