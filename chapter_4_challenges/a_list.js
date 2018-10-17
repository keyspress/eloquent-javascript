function arrayToList (array) {
  const arrLength = array.length -1
  let list = {}
  let listItem = {}
  for (let i = arrLength; i >= 0; i--){
    if(i === arrLength) {
      listItem = {value: array[i], rest: null}
    } else {
      list = { value: array[i], rest: listItem}
      listItem = list
    }
  }
  return list
}

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
console.log(arrayToList(arr))
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}