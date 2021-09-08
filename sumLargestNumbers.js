/*
In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

Input
const sumLargestNumbers = function(data) {
  // Put your solution here
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
Expected Output
11
5
126
*/

const sumLargestNumbers = function(data) {
  // Put your solution here
  let num1 = data[0];
  let num2 = data[0];
  for(let number of data){
    if (number>=num1){
      num2 = num1;
      num1 = number;
    }else if(number>=num2){
      num2 = number;
    }
  }
  return num1+num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));