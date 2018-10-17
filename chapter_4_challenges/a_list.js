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


function listToArray (list) {
  let arr = []
  let listItem = list;
  while(listItem.rest !== null) {
    arr.push(listItem.value)
    listItem = listItem.rest
  }
  arr.push(listItem.value)
  return arr
}

function prepend (value, rest) {
  list = {
    value,
    rest
  }
  return list
}

const arr = [1,2,3]
console.log(arrayToList(arr))
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}