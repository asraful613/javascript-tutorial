const mobiles = [
    {name:'samsung', price:2000, camera:'12mp', color:'black'},
    {name:'xoami', price:12000, camera:'12mp', color:'black'},
    {name:'oppo', price:10000, camera:'12mp', color:'black'},
    {name:'Iphone', price:112000, camera:'12mp', color:'black'},
    {name:'walton', price:3000, camera:'12mp', color:'black'},
    {name:'Vivo Y11', price:302000, camera:'12mp', color:'black'}
];

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price > min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('cheapest phone is:', cheap);
