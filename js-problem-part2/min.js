const prices=[2343434,2323,19999,343333,331111]
function getMin(numbers){
    let min=numbers[0]
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}
const cheap=getMin(prices);
console.log('cheapest one is',cheap);