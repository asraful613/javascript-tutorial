// function add(x,y){
//     if(typeof x !=='number' ||typeof y !=="number"){
//         return "please provide a number";
//     }
//     return x+y;
// }
// console.log(add("3",4));

function details(info) {
    if (typeof info !== "object") {
        return "input should be an object";
    }
    else if (!info.name || !info.age) {
        return "object must contain name and age property";
    }
    else if (typeof info.name !== "string" || typeof info.age !== "number") {
        return "name should be string, age should be a number";
    }
    else if (info.age <= 0) {
        return "age should be a positive number";
    }
    else {
        return `my name is: ${info.name}. my age is ${info.age}`;
    }
}

console.log(details({ name: "asraful", age: 25 }));
