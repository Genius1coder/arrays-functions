Arrays and Functions Assignment

// Question 1

What are the differences between mutating array methods and non-mutation array

 methods in JavaScript. List 5 array methods that fall under each of them.

 // Answer

 Mutating array methods are those JavaScript array functions that change an array

 itself instead of returning a new array with new changes.

  Non mutating array methods on the other hand are those JavaScript array functions,

  which return a whole new array that has all the changes.


Mutating Array Methods

The mutating array methods include the following:

1)	array.push(): Adds a new item as the last item of an array.

2)	array.pop(): Removes the last item of an array.

3)	array.reverse(): Reverses the order of an array.

4)	array.sort(): Reorders the items in an array based on their Unicode code points.

5)	array.copyWithin(): Copies one part of an array and put it in another part of the same array. 


Non-Mutating Array Methods

The non-mutating array methods include the following:

1)	array.concat():Merges two or more arrays together.

2)	array.slice(): Cuts a section out of the array where one can define the starting point and the end point.

3)	array.filter(): Filters all the elements based on certain criteria specified in the callback function.

4)	Array.map():Contains the results of calling a provided function on every element in an array.

5)	Array.flat(): Creates a new array with all sub-array elements concatenated into it 

recursively up to the specified depth.

// Answer to Question 2

a. const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.push('Kotlin');

console.log(languages); // output: ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin'].

b. const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.splice(languages.indexOf('Ruby') + 1, 0, 'Java');

console.log(languages); // output: ["C#", "JavaScript", "Ruby", "Java", "PHP", "Python"];

c. const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.push('C#');

console.log(languages); // output: [JavaScript', 'Ruby', 'PHP', 'Python',];

d. const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.unshift('Scala', 'Swift');

console.log(languages); // ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

e. const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

const index = languages.indexOf('PHP');

languages.splice(index, 1, 'Go', 'Rust');

console.log(languages); // Output: ['C#', 'JavaScript', 'Ruby', 'Go', 'Rust', 'Python'];

// Answer to question 3

The value of fruit after calling the function changeFruit will be ['apple', 'mango', 'orange'];

// Answer to question 4

function getMaxValue(arr) {

    let maxValue = arr[0]; // set the first element as the maximum value
    
    for (let i = 1; i < arr.length; i++) {

      if (arr[i] > maxValue) {

        maxValue = arr[i]; // update the maximum value if a larger number is found
      }
    }
    
    return maxValue;
  }

  For example:

const numbers = [3, 7, 2, 9, 1];

const max = getMaxValue(numbers);

console.log(max); // Output: 9.

// Answer to question 5

function valTimesIndex(arr) {

    return arr.map((val, index) => val * index);

  }

  For example:

  valTimesIndex([2, 4, 6, 8]); // return [0, 4, 12, 24];






