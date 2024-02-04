// objectibe:write a function to give me the sum off all numbers in an array
// --->step-1   declare a function
// -->step-2     call check whether the function is called properly
// --->step-3   set a parameter
// --->step-4   pass the parameter(s),check whether parameter is passed is a proper format
// --->step-5   do the functin task (step by step)



function sumOfnumber(number){
    let sum=0;
    for(const numbers of number){
        console.log(numbers);
        sum=sum+number;
    }
    return sum;
}
const nums=[3,434,24,23232,43,34,34]
const sum =sumOfnumber(nums);
console.log('sum of number',sum);