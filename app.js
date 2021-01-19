const numbers = [1, 2, 3];
console.log(numbers);

// create array using constructor function
// const moreNumbers = new Array(); // []
const moreNumbers = new Array("Howdy", "Welcome!", "Stickers");
console.log(moreNumbers);

// creates array [1, 5]
const moreNums = new Array(1, 5);
console.log(moreNums);

// creates array with 5 empty spaces [empty x 5]
// can remove new reserved word and will still compile
const sumNums = new Array(5);
console.log(sumNums);

// special method on global array object
// slower from a performace perspective than [] initializatoin
const evenMoreNums = Array.of(1, 2, 5, 6);
console.log(evenMoreNums);

// special way of changing an array-like object to an actual array
const desNumbers = Array.from("Howdy kind sir.");
console.log(desNumbers);

// const HTML list items to an array
const listItems = document.querySelectorAll("li");
console.log(Array.from(listItems));
