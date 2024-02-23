const products = [
    {id:1,name:'lenovo',price:65000},
    {id:1,name:'vivo',price:650000},
    {id:1,name:'realmi',price:5000},
    {id:1,name:'Oppo',price:65000}
]
// map
const names=products.map(product =>product.name)
// console.log(names);

// foreach
products.forEach(p => console.log(p.id))

// filter

const expensive =products.filter (p => p.price >50000)
console.log(expensive);

// find

const affortable =products.find(p => p.price <50000);
console.log(affortable);

// reduce 
const total =products.reduce((acum,current) =>acum+current.price,0);
console.log(total);