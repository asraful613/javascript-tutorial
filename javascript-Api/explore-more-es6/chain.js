const data =[{id:1,name:'asraful',address:'daulatkhan'}];
console.log(data);

const user ={
    id:5002,
    name:'asraful',
    address:{
        street:{
            first:'daulatkhan',
            second:'bhola',
            third:'dhaka'
        },
        city:'dhaka'
    }
}
const user2 = {
    id:5002,
    name:'sujon',
    address:{
        city:'Bangladesh',
        country:'abu dubai'
    }
}
console.log(user2.address.street?.second);