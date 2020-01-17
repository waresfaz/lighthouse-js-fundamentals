const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop that prints out the contents of the ingredients:
console.log("Banana bread ingredients:");
let i = 0
while (i < ingredients.length) {
console.log(ingredients[i]);
i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Banana bread ingredients:");
for (c = 0; c < ingredients.length; c++) {
  console.log(ingredients[c]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Backwards list of banana bread ingredients:");
for (s = 0; s < ingredients.length; s++) {
  const reversedList = ingredients.reverse();
  console.log(reversedList[s]);
}