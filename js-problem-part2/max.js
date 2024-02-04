// if(disha>salman){
//     console.log('disha will get the straberry');
// }
// else{
//     console.log('salman will eat the strawberry');
// }
// function getMax(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// const max = getMax(56, 79);
// const max2=getMax(60,30);
// const ultimax=getMax(max,max2)
// console.log('max of two is ' + ultimax );

const jim=56;
const tim=89;
const kim=68;
if(jim>tim && jim>kim){
    console.log('jim is the ultimate boss');
}
else if(tim>jim && tim>kim){
    console.log('tim is the boss');
}
else{
    console.log('kim is the number one boss');
}


function maxofThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
const bigNumber=maxofThree(80,20,40);
console.log('Bigger number:',bigNumber);

// shorhand
const max=Math.max(23,343,5,6,43,2,22);
console.log(max);