// arr = [1, 2, 3, 4, 5]
// console.log(arr[4]); 
//let arr = [1, 2, 3, 4, 5];
//console.log(arr[0]);  



//arr = [1, 2, 3, 4, 5]
//console.log(arr); 
//console.log(arr[4]);
//console.log(arr.length);

//arr push, arr pop, arr shift,arr unshift,arr length,arr remove and arr pop are same but different pop is before remove and  shift is after remove

//let arr = [1, 2, 3, 4, 5]
// arr.push(6);
//  arr.pop(); // back remove
// arr.shift(); // before remove
//  arr.unshift(9); // push number or anithings (unshift=push same )
// console.log(arr); //print
//  console.log(arr.length); // total words and number

//array

// let arr = [1, 2, 3, 4, 5];  
//console.log(arr[0]);  // Output: 1

// creating in array

// let numbers = [1, 2, 3, 4, 5];  
//console.log(numbers);  // Output: [1, 2, 3, 4, 5]


// accessing array elements
//let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);  // Output: 1 (first element)
// console.log(numbers[2]);  // Output: 3 (third element)

// adding elements
//numbers.push(6);  // Adds 6 to the end
//console.log(numbers);  // Output: [1, 2, 3, 4, 5, 6]

//numbers.unshift(0);  // Adds 0 to the beginning
//console.log(numbers);  // Output: [0, 1, 2, 3, 4, 5, 6]

// removing elements

//numbers.pop();  // Removes the last element
//console.log(numbers);  // Output: [0, 1, 2, 3, 4, 5]

//numbers.shift();  // Removes the first element
//console.log(numbers);  // Output: [1, 2, 3, 4, 5]

// Iterating Over an Array
//numbers.forEach(num => console.log(num));  // Prints each number

// Mapping Over an Array

//let squared = numbers.map(num => num * num);
//console.log(squared);  // Output: [1, 4, 9, 16, 25]
// Filtering an Array


//let evenNumbers = numbers.filter(num => num % 2 === 0);
//console.log(evenNumbers);  // Output: [2, 4]

//  Finding an Element
//let found = numbers.find(num => num > 3);
//console.log(found);  // Output: 4 (first number greater than 3)


let countries = ["India", "USA", "Nepal", "Japan"];  
countries.forEach(country => console.log(`Country on Earth: ${country}`));
