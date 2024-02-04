// for (let i = 1; i <= 200; i++) {
//     console.log(i);
//     if (i > 100) {
//         break;
//     }
// }
//  let numbers = 1;
//  while(numbers<100){
//     console.log(numbers);
//     if(numbers>=80){
//         break;
//     }
//     numbers++;
//  }
// for(let i =1; i<40;i++){
//     if(i %2===1){
//         continue;
//     }
//     console.log(i);
// }
// for(let i =55; i<85;i++){
//     if(i % 5){
//         continue;
//     }
//     console.log(i);
// }
// for(let i = 0; i<60;i++){
//     console.log('I will envest at least 6 hour every single day for next 60 days',i);
// }
// let sum =0;
// for (let i =60; i<80; i++){
//     if (i % 2 !==0){
//         sum=sum+i;
//         console.log(i);
//     }
// }
// console.log('sum of odd number from 60 to 80',sum);
// for (let i =80;i>20;i--){
//     console.log(i);
// }
// task 1 complete
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"]);
// task 2 complete
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car.passengerCapacity=5;
// console.log(car);

// task 3 complete
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

// task 4 complete
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// let numberOfproperties=Object.keys(student);
// let number =Object.values(student).length;
// console.log(number);
// console.log(numberOfproperties);

// task 5 
// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (let key in myObject) {
//     let value = myObject[key];
//     let type = typeof value;
//     console.log(`key: ${key} | type: ${type}`);
// }
// let num = 'asrafulasfaa';
// let sum = num.split('a'); // Using 'a' as the separator

// console.log(sum); // Outputs: ["", "sr", "ful", "sf", ""]


// const x ="My name is Asraful";
// console.log(x);
// const words =x.split("");
// console.log(words);
// const y =words.join(":");
// console.log(y);

// object javascript
// const pet ={
// name:"travis",
// age :2,
// isMale :true,
// food:'Fish',
// color :"white",
// specis :"hulo beral"
// };
// dot notation 
// const catfood =pet.food;
// console.log(catfood);
// bracket notatin
// const catMale = pet["isMale"];
// pet.color="black";
// pet.isMale=false;
// pet.sound='meo meo';
// delete pet.age;
// console.log(pet);
// for(let key in pet){
//     console.log(key,typeof key);
//     console.log(pet[key]);
//     console.log(key);
// }
// const student = {
//     name:{
//         firstName:"mehedy",
//         midddleName:"hassan",
//     },
//     subject:["bangla","eglish",],
//     isMale:true,
//     roll:20,
// };
// console.log(student.name.midddleName);
// console.log(student.subject[0]);
// console.log(`my pet is ${pet.name}.
// his favourite food ${pet.food}
// and his color ${pet.color}`);
// task 1
// Array reverse mood
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const reversed=colors.split('').reverse().join('');
// console.log(reversed);

// let reversed =[]
// for(i=colors.length -1;i>=0;i--){
//     reversed.push(colors[i])
// }
// console.log(reversed);
// colors.reverse();
// console.log(colors);

// const rev_color = []
// for(const color of colors){
//     rev_color.unshift(color)
// }
// console.log(rev_color);

// task 2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumber=[];
// for(const num of numbers){
//     if(num %2 ===0){
//         evenNumber.push(num);
//     }
// }
// console.log(evenNumber);

// task 3
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// var numSt='';
// for(const item of numbers){
//     numSt+=item;
// }
// console.log(numSt);

// task 4
// const statement = 'I am a hard working person'
// const reversed =statement.split('').reverse('').join('')
// console.log(reversed);

// odd and even number loop sum
// const nums=[343,343,353,353,5344,33,10,30,45];
// let sumOffodd=0;
// let sumOffeven=0;
// for(let i =0;i<=nums.length-1;i++){
//     const x =nums[i]
//     if(x % 2===1){
//         sumOffodd +=x;
//     }
//     else{
//         sumOffeven +=x;
//     }
// }
// console.log(sumOffodd);
// console.log(sumOffeven);