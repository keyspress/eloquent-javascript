function arrayToList (array) {
  let list = {}
  array.forEach((item, i) => {
    if(i === 0) {
      list.value = item;
      list.rest = {}
    } else if(i === 1) {
      list.rest.value = item;
      list.rest.rest = {}
    } else {
      list.rest.rest.value = item;
      list.rest.rest.rest = null
    }
  });
  return list
}

function listToArray (list) {
  let arr = []
  
}

const arr = [1,2,3]

console.log(arrayToList(arr))