const data = require('./ancestry')
const ancestry = JSON.parse(data)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});

function ageDiff(array) {
  const spans = []
  array.forEach(person => {
    if(byName[person.mother]){
      const mom = byName[person.mother]
      spans.push(person.born - mom.born)
    }
  })
  return average(spans)
}

console.log(ageDiff(ancestry))
// console.log(ancestry)