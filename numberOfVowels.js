/*
In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

Input
const numberOfVowels = function(data) {
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
Expected Output
3
5
5
*/
const numberOfVowels = function(data) {
  // Put your solution here
  let count=0;
  for(i of data){
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));