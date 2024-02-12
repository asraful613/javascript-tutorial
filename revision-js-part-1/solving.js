// // function name
// function AnaToVori (Ana){
//     if(typeof Ana !=="number"||Ana<0){
//         return "please provide a valid integer number"
//     }
//     const vori=Ana*0.0625;
//     return vori;
// }
// console.log(AnaToVori(5));

// function PhonePrice(mobile){
//     const NokeyaPrice=1200;
//     const quantity=mobile*NokeyaPrice;
//     return quantity;
// }
// console.log(PhonePrice(2));

function AnaToVori(ana) {
    if (typeof ana !== "number") {
        return "please provide a number";
    } else if (ana < 0) {
        return "please provide a positive number";
    } else {
        const vori = ana * 12.4;
        return vori;
    }
}

console.log(AnaToVori(-12));
