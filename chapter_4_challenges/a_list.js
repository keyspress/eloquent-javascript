function arrayToList (array) {
  let list = {}
  let listItem = {}
  for (let i = array.length -1; i >= 0; i--){
    if(i === array.length -1) {
      listItem = {value: array[i], rest: null}
    }
  }
}

arrayToList()
// function arrayToList (array) {
//   let list = {}
//   array.forEach((item, i) => {
//     if(i === 0) {
//       list.value = item;
//       list.rest = {}
//     } else if(i === 1) {
//       list.rest.value = item;
//       list.rest.rest = {}
//     } else {
//       list.rest.rest.value = item;
//       list.rest.rest.rest = null
//     }
//   });
//   return list
// }

function listToArray (list) {
  let arr = []

}

const arr = [1,2,3]

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}