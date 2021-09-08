/* Input
const instructorWithLongestName = function(instructors) {
  // Put your solution here
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
Expected Output
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
 */

const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let _name = [];
  let _course = [];

  for (item of instructors){
    if (item.name.length>_name.length){
      _name = item.name;
      _course = item.course;
    }
  }
  return {name:_name,course:_course};
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

