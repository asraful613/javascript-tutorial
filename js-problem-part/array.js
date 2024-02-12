function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments[3]);
}
// add(12,13,12,23,23,44,23);/*array like object*/

// match 
const numbers=[2,343,24,2323,23,23,];
// for(let i =0;i<numbers.length;i++){
//     const number=numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number);
}

// const products=[
//     {id:1,name:'vivoy11 phone',price:13000},
//     {id:2,name:'iPHONE phone',price:13000},
//     {id:3,name:'Samsung',price:1200},
//     {id:4,name:'walton Phone',price:1000},
//     {id:4,name:'xiomi',price:1400},
// ]
// for(const product of products){
//     console.log(product);
// } 
const products = [
    { id: 1, name: 'vivoy11 phone', price: 13000 },
    { id: 2, name: 'iPHONE phone', price: 13000 },
    { id: 3, name: 'Samsung', price: 1200 },
    { id: 4, name: 'walton Phone', price: 1000 },
    { id: 5, name: 'xiomi', price: 1400 },
];

function matchProduct(products, search) {
    const match = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product);
        }
    }
    return match;
}

const result = matchProduct(products, 'phone');
console.log(result);
