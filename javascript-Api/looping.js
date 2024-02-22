const numbers=[34,3434,242,323,2323,34];
// for(let i = 0; i <numbers.length,i++){}
for (const num of numbers){
    console.log(num);
}

const nobab='siraj ud doula';
for (const char of nobab){
    // console.log(char);
}

const glass={
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true,
};
for (const key in glass){
    const value=glass[key]
    console.log(key,value);
}