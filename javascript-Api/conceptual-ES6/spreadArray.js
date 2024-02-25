// const number=[1,2,3,4,5];
// const number1=[...number];
// number.push(10);
// number1.push(20);
// console.log(number,number1);



// destructing js
const nums=[3,44,34,2,22];
// const a=nums[0]
// const b=nums[2]
// const c=nums[3]

const [a,b,c, ...d]=nums;


console.log(a,b,c,d);