/*
Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

For example:

code	output
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]
*/

function merge(array1, array2) {
  let array = array1;
  for (let element of array2) {
    array.push(element);
  }
  return array.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));