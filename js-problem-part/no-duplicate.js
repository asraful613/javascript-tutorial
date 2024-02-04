// array has duplicate elements

const biranikhor =['abul','babul','sabul','abul','babul','dabul','cabul'];
const numbers =[2,3,34,2,2,24,44,543,53,23,2,4,5,3,3];
function noduplicat(array){
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
        unique.push(item);
        }
    }
    return unique;
}
// const uniqueArray=noduplicat(biranikhor);
const uniqueArray=noduplicat(numbers);
console.log(uniqueArray);