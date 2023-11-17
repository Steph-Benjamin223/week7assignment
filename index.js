//1.
// 1. Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 2. Subtract the first element from the last element programmatically
let difference = ages[ages.length - 1] - ages[0];
console.log(
  `The difference between the first and last elements is ${difference}.`
);

// 3. Add a new age to the array and repeat the subtraction step to ensure it's dynamic
ages.push(50);
difference = ages[ages.length - 1] - ages[0];
console.log(
  `The difference between the first and last elements is now ${difference}.`
);

// 4. Use a loop to calculate the average age
let totalAge = 0;

for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}

const averageAge = totalAge / ages.length;

console.log(`The average age is ${averageAge}.`);

// 2.
//  Create an array called names
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//  Use a loop to calculate the average number of letters per name
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

const averageLetters = totalLetters / names.length;

console.log(`The average number of letters per name is ${averageLetters}.`);

//  Use another loop to concatenate all the names together separated by spaces
let concatenatedNames = "";

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}

console.log(`The concatenated names are: ${concatenatedNames}`);
