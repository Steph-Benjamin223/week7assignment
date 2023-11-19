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

console.log(concatenatedNames); //Sam Tommy Tim Sally Buck Bob

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
//initializing an array called nameLengths to store the length of each name.  Start a for loop where names.length is the number of elements in the names array. I am using the length property of the name to get the number of characters in the name.  Store the length in a variable called length. Push the length value into the nameLengths array using the push() method.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  const length = names[i].length;
  nameLengths.push(length);
}
console.log(nameLengths); // output (6): [3, 5, 3, 5, 4, 3]

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
//Initialize a variable called sum to store the sum of all the elements in the array.  Start a for loop where nameLengths.length is the number of elements in the nameLengths array.  Add the length of each name to the sum variable.  Print the sum to the console.
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i].length;
}
console.log(sum);

//7. Write a function that takes two parameters, word and n,
//as arguments and returns the word concatenated to itself n numturn
//‘HelloHelloHello’).

//The code defines a function called `concatenateWord` that takes two parameters: `word` and `n`. The purpose of this function is to concatenate the `word` parameter `n` number of times and print the resulting concatenated word to the console.

//Inside the function, a variable called `concatenatedWord` is initialized as an empty string. Then, a `for` loop is used to iterate `n` times. During each iteration, the `word` parameter is added to the `concatenatedWord` using the `+=` operator, concatenating the word `n` times.

//The resulting `concatenatedWord` is printed to the console using `console.log()`.

function concatenateWord(word, n) {
  let concatenatedWord = "";
  for (let i = 0; i < n; i++) {
    concatenatedWord += word;
  }
  console.log(concatenatedWord);
}

concatenateWord("Hello", 6); // output: HelloHelloHelloHelloHelloHello

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space
//The getFullName function takes two parameters: `firstName` and `lastName`. Inside the function, a template literal is used to concatenate the first name and last name with a space in between. The resulting full name is returned from the function. The function is called with the arguments "John" and "Doe" and the resulting full name is stored in a variable called `fullName`. The `fullName` variable is printed to the console using `console.log()`.

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const fullName = getFullName("John", "Doe");
console.log(fullName);

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//The `arrayOfNumbers` function takes an array of numbers as a parameter. Inside the function, a variable called `sum` is initialized to 0. Then, a `for` loop is used to iterate over the array of numbers. During each iteration, the current number is added to the `sum` variable. After the loop, an `if` statement is used to check if the `sum` is greater than 100. If the `sum` is greater than 100, the function returns `true`. Otherwise, the function returns `false`.

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
//The code defines a function called `numbersArray` that takes an array of numbers as a parameter called nums. The purpose of this function is to calculate the average of the numbers in the nums array.
//Inside the function, a variable called `average` is initialized to 0. Then, a for loop is used to iterate over each element in the nums array. During each iteration, the current element is added to the average variable using the += operator summing up all the numbers in the array.

//the average is divided by the length of the nums array to calculate the average. The calculated average is then returned from the function.
//Outside the function, an array called nums is defined with some numbers. The numbersArray function is called with the nums array as an argument. The returned average is printed to the console using console.log along with a string "numbersArray".

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
//The code defines two functions: compareAverage and calculateAverage.

//The calculateAverage function takes an array arr as input and calculates the average of its elements. It first checks if the length of the array is 0, and if so, it returns 0 as the average. Otherwise, it uses the reduce method to sum up all the elements in the array and then divides the sum by the length of the array to get the average.
//The compareAverage function takes two arrays arr1 and arr2 as input. Inside the function, it calls the calculateAverage function on each array to calculate their respective averages. It then compares the two averages using the > operator. If the average of arr1 is greater than the average of arr2, the function returns true. Otherwise, it returns false.

//In the example two arrays array1 and array2 are defined with some numbers. The compareAverage function is called with these arrays as arguments, and the result is printed to the console.

//The code essentially calculates the average of two arrays and determines if the average of the first array is greater than the average of the second array.

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
//The code defines a function called willBuyDrink that takes two parameters: isHotOutside and moneyInPocket. The purpose of this function is to determine if a person will buy a drink based on the weather and how much money they have in their pocket. The function returns true if it is hot outside and if moneyInPocket is greater than 10.50. Otherwise, the function returns false. The function is called with the arguments true and 15.75 and the resulting value is stored in a variable called willBuyDrink. The willBuyDrink variable is printed to the console using console.log().

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

// Example
console.log(willBuyDrink(true, 15.75));
