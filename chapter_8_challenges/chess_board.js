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