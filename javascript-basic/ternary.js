// ternary ->three
const age = 30;
// if (age > 20){
//     console.log('you can vote');
// }
// else {
//     console.log('gumai thako');
// }
age>=18 ? console.log('vote dio'): console.log('gumai thako');


var price = 500;
const leader =true;
if (leader ===true){
    price = 0;
}
else {
    price =price/2;
}
console.log(price);
// shorthand
price = leader ===false ?250:price+100;