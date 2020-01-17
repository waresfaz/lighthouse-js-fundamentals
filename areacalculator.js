function calculateRectangleArea(length, width) {
  let r = length * width;
  if (r <= 0) {
    return undefined;
  } else {
  return r;
  }
}


function calculateTriangleArea(base, height) {
  let t = (base * height) / 2;
  if (t <= 0) {
    return undefined;
  } else {
    return t;
  }
}


function calculateCircleArea(radius) {
  let c = Math.PI * (radius * radius);
  if (radius <= 0) {
    return undefined;
  } else {
    return c;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined
console.log(calculateRectangleArea(20, 50));
console.log(calculateRectangleArea(1.5, 3.5));
console.log(calculateRectangleArea(-1, 0));

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined
console.log(calculateTriangleArea(20, 50));
console.log(calculateTriangleArea(30, 3.5));
console.log(calculateTriangleArea(-1, 0));

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined