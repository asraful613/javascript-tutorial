const number = [23,43,2,23,32];
// console.log(number);

//  const reversed =number.reverse();
// number.reverse()
// console.log(reversed);
const rev_numbers=[];
for(const num of number){
    // console.log(num);
    rev_numbers.unshift(num)
}
console.log(rev_numbers);