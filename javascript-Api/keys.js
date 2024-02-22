const glass={
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true,
};
// all property name
const keys=Object.keys(glass);
// console.log(keys);
// all value name
const values=Object.values(glass);
// console.log(values);

const pair=Object.entries(glass);
// console.log(pair);

// delete object
delete glass.isCleaned;
// console.log(glass);

// freeze
Object.freeze(glass);
glass.source='Bangladesh';
console.log(glass);