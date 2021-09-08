/*
Define a function lastIndexOf.

When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

For example:

code	output
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	-1
lastIndexOf([ 5, 5, 5 ], 5);	2
lastIndexOf([], 3);	-1
*/
function lastIndexOf(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1; //return -1 if no value found
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 2));