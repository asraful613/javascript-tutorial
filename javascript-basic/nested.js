// const money = 500;
// if (money > 300){
//     console.log('bro you are a rich');
// }
// else if(money > 100){
//     console.log('tui borolok o na gorib o na')}
//     else {
//         if (money >0){
//             console.log('dosto kola kha');
//         }
//         else {
//             console.log('tui amar bondu na');
//         }
//     }
const college ={
    name:'omuk college',
    year:[334,53,53,3],
    merit:{
        position:'top',
        place:'tomuk'
    }
}
college.merit.position='last'
console.log(college);
console.log(college.year[0]);
college.year[0]=39;
delete college.merit.place;
console.log(college);