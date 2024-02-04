function oddAverage(numbers){
    const odd = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            odd.push(number);
        }
    }
    let sum = 0;
    for (const num of odd) {
        sum += num;
    }
    return sum / odd.length;
}

const numbers = [14, 4, 3, 42, 2, 2, 12, 2, 7, 5];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is', avg);
