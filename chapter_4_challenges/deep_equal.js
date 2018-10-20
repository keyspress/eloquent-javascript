function deepEqual (item1, item2) {
  if((typeof item1 !== 'object') || (typeof item2 !== 'object')) {
    return item1 === item2
  } else {
    let array1 = Object.values(item1)
    let array2 = Object.values(item2)
    for(let i = 0; i < array1.length; i++) {
      return deepEqual(array1[i], array2[i])
    }
  }
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

// author solution
// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a == null || typeof a != "object" ||
//     b == null || typeof b != "object") return false;

//   let keysA = Object.keys(a), keysB = Object.keys(b);

//   if (keysA.length != keysB.length) return false;

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }