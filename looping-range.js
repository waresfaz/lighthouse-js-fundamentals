function range(start, end, step) {
  const someArray = [];
  for (i = 0; i < end; i += step) {
    someArray.push(i);
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));