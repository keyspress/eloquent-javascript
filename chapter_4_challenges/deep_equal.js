function deepEqual (item1, item2) {
  if((typeof item1 !== 'object') || (typeof item2 !== 'object')) {
    return item1 === item2
  } else {
    let val1 = item1[Object.keys(item1)[0]];
    let val2 = item2[Object.keys(item2)[0]];
    // for (let item in item1) {
    //   val1 = item;
    //   console.log(val1)
    //   break;
    // }
    // for (let item in item2) {
    //   val2 = item;
    //   break;
    // }
    console.log(val1, val2)
    deepEqual(val1, val2)
  }
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true