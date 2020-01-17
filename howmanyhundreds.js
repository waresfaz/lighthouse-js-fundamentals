function howManyHundreds (num) {
  if (num >= 100) {
    return Math.floor(num / 100);
  } else {
    return 0;
  }
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
console.log(howManyHundreds(1234));
console.log(howManyHundreds(100));
console.log(howManyHundreds(200));
console.log(howManyHundreds(123456));
console.log(howManyHundreds(55));