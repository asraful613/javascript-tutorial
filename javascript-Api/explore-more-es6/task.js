const oddArray =[1,2,3,4,5];
const evenArray=[];
for (const num of oddArray){
    const even =num;
    evenArray.push(even %2 ===0? even:even+1)
}
// console.log(evenArray);

// map method
const evenarray=oddArray.map(num =>num%2 ===0 ? num:num+1)
// console.log(evenarray);

// filter method
const number =[33,50,60,34,70];
const divisible=number.filter(num => num %10===0);
// console.log(divisible);



const instructors = [
    { name: 'nodi', age: 28, position: 'senior' },
    { name: 'akhil', age: 26, position: 'junior' },
    { name: 'nakhil', age: 30, position: 'senior' }
];

const seniorInstructorNames = instructors
    .filter(instructor => instructor.position === 'senior')
    .map(instructor => instructor.name);

console.log(seniorInstructorNames); 