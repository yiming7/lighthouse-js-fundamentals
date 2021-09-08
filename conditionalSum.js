/*
For this kata, we'll be adding only the numbers in the array which match the given condition.

Input
const conditionalSum = function(values, condition) {
  // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
Expected Output
6
9
144
0
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Use some sort of looping. Do Not use Array.prototype.filter()
*/
const conditionalSum = function(values, condition) {
  // Your code here
  let sum=0;
  if(condition==="odd"){
    for(i of values){
      if(i%2===1){
        sum+=i;
      }
    }
  }else if(condition==="even"){
    for(i of values){
      if(i%2===0){
        sum+=i;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));