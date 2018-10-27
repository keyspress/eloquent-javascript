function Vector(x, y)  {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(func) {
  return `Vector {x: ${this.x + func.x}, y: ${this.y + func.y}}`
}

Vector.prototype.minus = function(func) {
  return `Vector {x: ${this.x - func.x}, y: ${this.y - func.y}}`
}

Vector.prototype.length = function() {
  let distance = Math.sqrt((this.x * this.x) + (this.y * this.y))
  return distance
}







console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5