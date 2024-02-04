// declare an array
const fruits = ['mango','lemon','tomato','chilly','orange'];
console.log(fruits.indexOf('tomato'));
fruits[2]='jambura';
console.log(fruits);
// add or remove elements
const tourist = ['bandorbon','bhola','barishal'];
tourist.push('sundorbo')
tourist.push('charfession','khamarbari')
tourist.pop()
console.log(tourist);
// checking array membership with includes
const books = ['paradoxical-sajid','bela purabar age','time-mangaement-with-islam'];
console.log(books.includes('paradoxical-sajid'));
if (books.includes('paradoxical-sajid')){
    console.log('you are a very handsome person');
}
else{
    console.log('nothing');
}
// checking if it's  array
const number = [20,45,35];
const age = ['fifteen'];
const year = 15;
console.log(Array.isArray(year));
// combinibg Arrays
const country = ['bangladesh','afganistan'];
const visited = ['palestine']
const combinedArray = country.concat(visited);
combinedArray.push('Iran')
combinedArray.pop()
combinedArray.unshift('Iran')
combinedArray.shift()
console.log(combinedArray);
// length number
let numbers = [23, 453, 35, 34, 3, 43];
numbers[5] = 999; // Update the sixth element to 999
console.log(numbers.length); // Output: 6
console.log(numbers); // Output: [23, 453, 35, 34, 3, 999]
