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

function nth (list, num) {
  const arr = listToArray(list);
  return arr[num]
}


const arr = [1,2,3]
console.log(arrayToList(arr))
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(value, list) {
//   return { value, rest: list };
// }

// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }
