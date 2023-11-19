// 1. Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//  Subtract the first element from the last element programmatically, the difference between the first and the last element of the array is 90
let difference = ages[ages.length - 1] - ages[0];
console.log(
  `The difference between the first and last elements is ${difference}.`
);

// Add a new age to the array (50) and repeat the subtraction step to ensure it's dynamic, and the difference between the first and last element is now 47.
ages.push(50);
difference = ages[ages.length - 1] - ages[0];
console.log(
  `The difference between the first and last elements is now ${difference}.`
);

//Use a loop to calculate the average age, average age prints to console 31.11111.
let totalAge = 0;

for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
//
const averageAge = totalAge / ages.length;

console.log(`The average age is ${averageAge}.`);

// 2.
//  Create an array called names
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to calculate the average number of letters per name
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

const averageLetters = totalLetters / names.length;

console.log(`The average number of letters per name is ${averageLetters}.`); // the average number of letters per name prints to console 3.8333333333333335

//  Use another loop to concatenate all the names together separated by spaces (double quotes indicate the spaces)
let concatenatedNames = "";

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}

console.log(`The concatenated names are: ${concatenatedNames}`);

//3. How do you access the last element of any array?
// you can use the index array.length -1.  An example is below:
let array = [1, 2, 3, 4, 5];
let lastElement = array[array.length - 1];
console.log(lastElement); // output: 5

//4. How do you access the first element of any array?
// you can use the index 0.  An example is below:

let firstElement = array[0];
console.log(firstElement); // output: 1

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  const length = names[i].length;
  nameLengths.push(length);
}
console.log(nameLengths); // output: [3, 5, 3, 5, 4, 3]

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i].length;
}
console.log(sum); // output: 23

//7. Write a function that takes two parameters, word and n,
//as arguments and returns the word concatenated to itself n numturn
//‘HelloHelloHello’).

function concatenateWord(word, n) {
  let concatenatedWord = "";
  for (let i = 0; i < n; i++) {
    concatenatedWord += word;
  }
  console.log(concatenatedWord);
}

concatenateWord("Hello", 6); // output: HelloHelloHelloHelloHelloHello

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const fullName = getFullName("John", "Doe");
console.log(fullName);

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function arrayOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}
let numbers = [7, 9, 11, 23, 27, 39];
console.log("arrayOfNumbers", arrayOfNumbers(numbers));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numbersArray(nums) {
  let average = 0;
  for (let i = 0; i < nums.length; i++) {
    average += nums[i];
  }

  average = average / nums.length;
  return average;
}
let nums = [7, 9, 11, 23, 27, 39];
console.log("numbersArray", numbersArray(nums));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverage(arr1, arr2) {
  const average1 = calculateAverage(arr1);
  const average2 = calculateAverage(arr2);

  return average1 > average2;
}

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}
// Example
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

console.log(compareAverage(array1, array2));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

// Example
console.log(willBuyDrink(true, 15.75));
