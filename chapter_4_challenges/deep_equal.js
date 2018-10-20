function deepEqual (item1, item2) {
  if((typeof item1 !== 'object') || (typeof item2 !== 'object')) {
    return item1 === item2
  } else {
    // for (i in item1) {
    //   for(j in item2) {
    //     return deepEqual(i, j)
    //   }
    // }
    let array1 = Object.values(item1)
    let array2 = Object.values(item2)
    for(let i = 0; i < array1.length; i++) {
      return deepEqual(array1[i], array2[i])
    }
    // let val1 = array1[0];
    // let val2 = array2[0];    
    // return val1 === val2
    // console.log(val1, val2)
    // deepEqual(val1, val2)
  }
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true