// task 1 ----problem
// function wiil receive  parametar which woll be a number;
// convert the number to cube
// return the result
// return error message if we get other value datea type 
// instead of number

// function cubeNumber(number){
//     if(typeof number !=="number"){
//         return "please provide a number";
//     }
//     if(!typeof number<=0){
//         return "All should be a positive number";
//     }
//     const result=Math.pow(number,3);
//     return result;
// }
// console.log(cubeNumber(2));

// task-2--->problem
// match problem
// function matchFinder(string1,string2){
//      const result =string1.includes(string2)
//      return result;
// }
// console.log(matchFinder("Asraful","oh"));
// console.log(matchFinder("Asraful","ful"));


// const numbers = [12, 1, 3, 43, 442, 2, 2, 22];

// function numberFind(num) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === num) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(numberFind(12)); // Output: true


// problem part --->3
// make a function name as sortmaker(),which will take an array as input
// access the element of the input arraky;
// if element are equal than return equal  else return is desecending ;
// if any element is negative return invalid number ;

// function sortMaker(arr){
//     const [a, b] = arr;
//     if(a < 0 || b < 0){
//         return "invalid number";
//     }
//     if(a == b){
//         return "equal";
//     }
//     if(a > b){
//         return [a, b];
//     } else {
//         return [b, a]; // corrected 's' to 'a'
//     }
// }
// console.log(sortMaker([4, 3])); // Passing an array instead of two separate arguments

// // shortcut way
// function sortMaker(arr){
//     const [a, b] = arr;
//     if(a < 0 || b < 0 || a == b) {
//         return "invalid number";
//     }
//     return [Math.max(a, b), Math.min(a, b)];
// }
// console.log(sortMaker([12, 15])); // Output: [4, 3]

// function findAddress(obj){
//     const street=obj.street;
//     const house=obj.house;
//     const address=obj.address;

//     const str=street+house+address;
//     return str;
// }
// console.log(findAddress({street:10,house:"upozilla",address:"daulatkhan"}));


// const student={
//     name:'asraful',
//     id:121,
//     address:'movie cinema',
//     isSingle:true,
//     friend:['apu','simanto','foysal','muhit'],
//     movies:[{name:'no1',year:2012},{name:'king',year:2013}],
//     act:function(){
//         console.log('asraful is the best');
//     },
//     car:{
//         brand:'tesla',
//         price:5000,
//         made:2025,
//         manufacturer: {
//             name:'tesla',
//             ceo:'elon mask',
//             country:'usa'
//         }
//     }
// }
// console.log(student.car);
// console.log(student.act());

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRndInteger(1,6));