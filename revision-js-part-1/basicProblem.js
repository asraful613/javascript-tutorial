// const number=[3,342,424,21,24,45645,3]
// function findLargest(values){
//     if(!Array.isArray(values)){
//         return"provide an array";
//     }
//     let max=values[0];
//     for(let i=1;i<values.length;i++){
//         if(typeof values[i]!=="number"){
//             return "all values should be number";
//         }
//         if(values[i]>max){
//             max=values[i]
//         }
//     }
//     return max;
// }
// console.log(findLargest(number));
function findLargest(values) {
    if (!Array.isArray(values)) {
        return "provide an array";
    }
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== "number") {
            return "all values should be numbers";
        }
    }
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
        }
    }
    return max;
}

const numbers = [2, 4, 24, 4, 53, false, "2", 34];
console.log(findLargest(numbers));
