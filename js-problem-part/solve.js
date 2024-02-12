// const students=['sumit','saad','asraful','faruk'];
// console.log(students.sort());

// const roolNumber=[23,23,1,32,43,4,2,5];
// console.log(roolNumber.sort(function(a,b){
//     return  b-a;
// }));

// function isLeapYear(year){
//     if(year %400 ===0 || year %4 ===0 && year %100 !==0){
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }
// isLeapYear(2028);

// const vowels=['a','e','i','o','u'];
// function countvowel(sentence){
//     let count=0;
//     const letters=Array.from(sentence);
//     letters.forEach(function(value,index,array){
//         if(vowels.includes(value)){
//             count++;
//         }
//     })
//     return count;
// }
// console.log(countvowel('I love Allah'));

const number=[1,2,2,245,5,3,1234,245];
const duplicates=number.filter(function(value,index,array){
   return array.indexOf(value) !==index
})
console.log(duplicates);