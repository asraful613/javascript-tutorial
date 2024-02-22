const a =56;
const numbers=[56,7,8];
const person = {
    name:'asraful'
}
const message=`hi ,${person} has a: ${a} access to ${numbers[2]}`

// arrow function
const square=x=>x*x;
const sum= (a,b) => a+b;


// spread 

const {name,z,...other} ={x:2,y:5,z:3,name:'asraful'};
const [first,second,...remaining] =['a','b','c'];

// keys
