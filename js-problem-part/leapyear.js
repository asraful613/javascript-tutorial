// year woll be a leap year if the year is divisible by 4
// function leapyear (year){
//     if(year %4===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const lipu=leapyear(2024);
// console.log(lipu);

function leapYear(year){
    if(year %100 !== && year % 4===0){
        return true;
    }
    else if(year %100===0 && year %4===0){
        return true;
    }
    else{
        return false;
    }
}
const lip=leapYear(2000);
const lip2=leapYear(2052);

