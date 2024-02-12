// check if the number is even or idd
const x =5;
function checkEvenOdd(x){
    if(x %2===0){
        return "even";
    }
    else{
        return "odd";
    }
}
const result=checkEvenOdd(9);
console.log(result);

function printName(x){
    for (let i =1;i<=x;i++)
{
    console.log("i love Allah");
}
}
printName(5)