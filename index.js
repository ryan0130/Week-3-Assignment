//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//   a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
//      (do not use numbers to reference the last element, find it programmatically, ages[7] - ages[0] is not allowed).
//      Print the result to the console.
let ages = [3,9,23,64,2,8,28,93];

function subtractElement(ageArray) {
    let firstElement = 0;
    let lastElement = 0;
    const subArray = ageArray.map(function(number){
        firstElement = ageArray.slice(0,1);
        lastElement = ageArray.slice(-1);
        answer = lastElement - firstElement;
    });
    return answer;
}
console.log(subtractElement(ages));

//   b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(77);
console.log(subtractElement(ages));

//   c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let avgAnswer = 0;
let total = 0;
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
avgAnswer = total / ages.length;
console.log(avgAnswer);

/*
function averageElement(ageArray) {
    let avgAnswer = 0;
    const avgArray = ageArray.map(function(number){
        number += number;
    });
    return avgAnswer = number / ageArray.length;
}
console.log(averageElement(ages));
*/


//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//   a. Use a loop to iterate through the array and calculate the average number of letters per name.
//      Print the result to the console.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let wordAvg = 0;
let avgNum = 0;
const result = names.map(function(word) {
    wordAvg += word.length;
    avgNum = wordAvg / word.length;
    return avgNum;
});
console.log(result);

//   b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
const combine = names.join('');
console.log(combine);

//3. How do you access the last element of any array?
//array.slice(-1)
//array[-1]

//4. How do you access the first element of any array?
//array.slice(0,1)
//array[0]

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//   For example:
//   
//   namesArray = ["Kelly", "Sam", "Kate"] // given this array
//   nameLengths = [5, 3, 4] //create this new array]
let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = [];

for (let i = 0; i < namesArray.length; i++) {
    nameLengths[i] = namesArray[i].length;
}
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = 0;

for (let j = 0; j < nameLengths.length; j++) {
    sum += nameLengths[j];
}
console.log(sum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//   (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let value = "Hello";
let number = 3;

function countWords(word, n) {
    console.log(word.repeat(n));
}

countWords(value, number);

//8. Write a function that takes two parameters firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
let firstName = "Ryan";
let lastName = "Ramos";

function fullName(first, last) {
  return first + " " + last;
}

console.log(fullName(firstName, lastName));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array = [1, 2, 3, 4, 5];

function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if(sum > 100) {
      return true;
    } else {
      return false;
    }
}

console.log(sumArray(array));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let array = [1, 2, 3, 4, 5];

function averageArray(arr){
    const average = (array) => array.reduce((a, b) => a + b) / array.length;
    return average(arr);
}
console.log(averageArray(array));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements
//    in the second array.
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30 , 40 ,50];

function compareArray(arr1, arr2){
    const average1 = (array) => array.reduce((a, b) => a + b) / array.length;
    avgValue1 = average1(arr1);
    const average2 = (array) => array.reduce((a, b) => a + b) / array.length;
    avgValue2 = average2(arr2);
    if(avgValue1 > avgValue2) {
      return true;
    } else {
      return false;
    }
}
console.log(compareArray(array1, array2));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is 
//    greater than 10.50.
let weather = true;
let money = 50;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(weather, money));

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.




