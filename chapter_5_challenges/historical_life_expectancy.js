const data = require('./ancestry');
const ancestry = JSON.parse(data);

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

let sixteens = []
let seventeens = []
let eighteens = []
let ninteens = []
let twoThousands = []
let twentyOnes = []

ancestry.forEach(person => {
  const century = Math.ceil(person.died / 100)
  switch(century) {
    case (16) :
      sixteens.push(person.died - person.born);
      break;
    case (17):
      seventeens.push(person.died - person.born);
      break;
    case (18):
      eighteens.push(person.died - person.born);
      break;
    case (19):
      ninteens.push(person.died - person.born);
      break;
    case (20):
      twoThousands.push(person.died - person.born);
      break;
    default:
      twentyOnes.push(person.died - person.born);
      break;
  }
})

console.log(average(sixteens))
console.log(average(seventeens))
console.log(average(eighteens))
console.log(average(ninteens))
console.log(average(twoThousands))
console.log(average(twentyOnes))