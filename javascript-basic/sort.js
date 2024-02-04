const person =['rakib','sakib','mokib','nakib']
const sortPerson =person.sort();
console.log(sortPerson);

// sort-->
const number =[3,7,2,8,3,6,42,12];
// ascending -->smaller to larger--<
// descending-->larger to smaller--<
const number_asc =[...number].sort(function (a,b){return a-b})
const number_dsc =[...number].sort(function (a,b){return b-a})
console.log(number_dsc);
console.log(number_asc);