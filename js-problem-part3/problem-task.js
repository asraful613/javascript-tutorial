// problem 1
// function will receive a parametar which will be number
// convert the number to cube
// return the result
// return error message if we get data type
// instead of number

// function cubeNumber(number){
//     if(typeof number !=='number'){
//         return 'please provide a number'
//     }
//     const result=Math.pow(number,3);
//     return result;
// }
// console.log(cubeNumber(4));

// problem-->2
// we will write a function named as "matchfinder()"which wil take two input.
// will try two find match between the two string.
// return true /false based on the match
// return error message if the parameters are not string.

// function matchfinder(string1,string2){
//     if(typeof string1 !=='string' || typeof string2 !=='string'){
//         return 'please specify string as input parametar'
//     }
//     const result=string1.includes(string2)
//     return result;
// }
// console.log(matchfinder('Asra huq',"ful"));
// console.log(matchfinder('Asraful huq',"ful"));
// console.log(matchfinder('Peter Parker',"pet"));
// console.log(matchfinder([10],"17"));

// Problem -->3
// 1.make a function name as sortMaker(),which will take an array as input
// 2.access the elements of the input array
// 3.if any element is negetive return "invalid input" 
// 4.if element are equal,the return "equal".
// 5.if element are not equal,then return in descending order

// function sortMaker(arr) {
//     // Destructure the array to get the elements
//     const [a, b] = arr;

//     // Check if any element is negative
//     if (a < 0 || b < 0) {
//         return "invalid input";
//     }

//     // Check if elements are equal
//     if (a === b) {
//         return "equal";
//     }

//     // Return elements in descending order
//     if (a > b) {
//         return [a, b];
//     } else {
//         return [b, a];
//     }
// }

// console.log(sortMaker([5,6])); 



// Problem --->4

// 1.define a function name as "findaddress()"which will take an object as input
// 2.access the element of the object
// 3.form the string as give simple-->"10,15SA,Earth Perfect"
// 4.replace the missing property with __
// 5.return the string

// // define a function name as "findaddress()"which will take an object as input
// function findAddress(obj){
//  // access the element of the object
//  const street=obj.street ||"__";
//  const address=obj.address ||"__";
//  const house=obj.house;
//  const society=obj.society;
//  console.log(address);
//  // form the string as give simple-->"10,15SA,Earth Perfect"
//  const str=street+","+house+","+society;
// //  return the string
// return str;
// }
// console.log(findAddress({street:10,house:"15A",society:"Earth Perfect"}));


// Problem --->5
// make a function named as capay(),this will take two input parametar
// find sum of all the elements of the array
// if the sum is greater  than equal second input parameter,retrun true
// esle return false 
// if first input is an empty array,return error message;

// make a function named as capay(),this will take two input parametar
function canPay(changeArray, totalDue) {
    // Check if the array is empty
    if (changeArray.length === 0) {
        return "Error: Empty array";
    }

    // find sum of all the elements of the array
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum += element;
    }

    // if the sum is greater than or equal to the second input parameter, return true
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}

console.log(canPay([2, 23, 12, 34, 4], 50)); // true
console.log(canPay([2, 23, 12, 34, 4], 100)); // true
console.log(canPay([], 50)); // Error: Empty array
