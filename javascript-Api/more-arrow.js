const getAge=(person)=>person.age;
const student={name:'asraful',age:40}
const age=getAge(student);
console.log(age);

// no parametar
const getPI=() => Math.PI
console.log(getPI());

// large arrow function
const doMath=(x,y,z)=> {
    const sum=x+y+z;
    const mult=x*y*z;
    const result =sum+mult;
    return result;
}