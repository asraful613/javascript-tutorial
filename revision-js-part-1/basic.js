// functionl validation ---important topic

function details (info){
    if(typeof info !=="object"){
        return "input should be an object";
    }
    else if(!info.name ||!info.age){
        return "object must contain name and age property";
    }
    else if(typeof info.name !=="string" ||typeof info.age !=="number"){
        return "name should be a string and age should be a number";
    }
    else if(info.age<=0){
        return "age should be a positive number";
    }
    return `my name is: ${info.name}.My age is ${info.age}`;
}
console.log(details({name:"asraful", age:20}));