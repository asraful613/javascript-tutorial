// const first ='Abid';
// const last ='Nabid';
// const fullName =first+' '+last;
// console.log(fullName);
// // concat use 
// const fullName2 =first.concat(' ').concat(last)
// console.log(fullName2);
// console.log(last.includes('d'));
 const nums =[24,34,35,5,532,23,4];
//  for(let asraful of nums){
//     console.log(asraful);
//     if(asraful ===5){
//         break;
//     }
//  }
// skip
for (let item of nums){
    if(item % 2===0){
        continue;
    }
    console.log(item);
}