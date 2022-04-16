//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//   a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
//      (do not use numbers to reference the last element, find it programmatically, ages[7] - ages[0] is not allowed).
//      Print the result to the console.
let ages = [3,9,23,64,2,8,28,93];

function subtractElement(ages) {
    let firstElement = 0;
    let lastElement = 0;
    const subArray = ages.map(function(number){
        firstElement = ages.slice(0,1);         //The first element of the ages array
        lastElement = ages.slice(-1);           //The last element of the ages array
        answer = lastElement - firstElement;    //The difference between the last element
    });
    return answer;
}
console.log("The difference between the last element to the first element: " + subtractElement(ages));

//   b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(76);  //Adding a new element
console.log("New element has been added and has a new result: " + subtractElement(ages));

//   c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
const avgAge = ages.reduce((a, b) => a + b) / ages.length;
console.log("The average value of the ages array: " + avgAge);

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//   a. Use a loop to iterate through the array and calculate the average number of letters per name.
//      Print the result to the console.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

const totalNames = names.reduce((a, b) => a + b.length, 0);                     //Using the reduce array method to add the name length of each element.
const avgNames = (totalNames / names.length);                                   //Divide the total name length to the original name length of the array to get the average value
console.log("The average value of the names array: " + avgNames.toFixed(2));    //Round to two decimal points

//   b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let newNames = '';
for(let i = 0; i < names.length; i++){
    newNames = newNames.concat(names[i] + ' ');
}
console.log("Concatenate names with spaces in Between: " + newNames);

//3. How do you access the last element of any array?
console.log("The last element of the age array: " + ages.slice(-1));

//4. How do you access the first element of any array?
console.log("The first element of the age array: " + ages.slice(0,1));

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//   For example:
//   
//   namesArray = ["Kelly", "Sam", "Kate"] // given this array
//   nameLengths = [5, 3, 4] //create this new array]
let namesArray = ["Kelly", "Sam", "Kate"];

const nameLengths = namesArray.map(function(a,b){
    return b = a.length;
});
console.log("The length of each name of the array: " + nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
const sumNameLength = namesArray.reduce(function(a,b){
    return a + b.length
}, 0);
console.log("The sum of all the elements in the array: " + sumNameLength);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//   (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let value = "Hello";
let number = 3;

function countWords(word, n) {
    return word.repeat(n);
}
console.log("The word plus how many times it repeats: " + countWords(value, number));

//8. Write a function that takes two parameters firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
let firstName = "Ryan";
let lastName = "Ramos";

function fullName(first, last) {
  return first + " " + last;
}
console.log(fullName(firstName, lastName));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let listOfArray = [10, 20, 30, 40, 50];

function sumArray(arr) {
    const sum = arr.reduce(function(a,b){   //Calculate the sum of all numbers in the array
        return a += b;
    }, 0);
    if(sum > 100) {
      return true;
    } else {
      return false;
    }
}
console.log("Returns only true if the sum of the array is greater than 100: " + sumArray(listOfArray));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let array = [1, 2, 3, 4, 5];

function averageArray(arr){
    const average = arr.reduce((a, b) => a + b) / arr.length;
    return average;
}
console.log("The average numbers of all the elements in the array: " + averageArray(array));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements
//    in the second array.
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30 , 40 ,50];

function compareArray(arr1, arr2){
    const average1 = arr1.reduce((a, b) => a + b) / arr1.length;    //Get the average of first array
    const average2 = arr2.reduce((a, b) => a + b) / arr2.length;    //Get the average of second array
    if(average1 > average2) {
      return true;
    } else {
      return false;
    }
}
console.log("Returns true if the average of first array is greater than second array: " + compareArray(array1, array2));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is 
//    greater than 10.50.
let weather = true;
let money = 50;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log("Returns true if it's hot outside and money is greater than 10.50: " + willBuyDrink(weather, money));

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
const listOfAges = [32, 12, 20, 16, 5, 55, 7, 21, 45, 62, 3, 15, 45, 24, 61];

const combineAges = listOfAges.map(age => age * 2).filter(age => age >= 40).reduce((a, b) => a + b, 0);
console.log(combineAges);

// The reason why I created this function is to show how to manipulate data using different various methods of the array in JavaScript.
// It also states that you can call different methods within the variable and can execute multiple instances at the same time.

