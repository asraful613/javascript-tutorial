// function Pandacost (singara,samucha ,jilapi){
//     if(typeof singara !=="number" ||typeof samucha !=="number" ||typeof jilapi !=="number"){
//         return "please provide valid integer number";
//     }
//     else if (singara<0|| samucha<0||jilapi<0){
//         return "all parameter should be positive number"
//     }
//  else{
//  singaraPrice=7;
//  samuchaPrice=10;
//  jilapiPrice=15;

//  const total=singara*singaraPrice+samucha*samuchaPrice+jilapi*jilapiPrice;
//  return total;
//  }
// }
// console.log(Pandacost(1,2,3));


// pandacost
function PandaCost(singara, samucha, jilapi) {
    if (typeof singara !== "number" || typeof samucha !== "number" || typeof jilapi !== "number") {
        return "please provide valid integer number";
    } else if (singara < 0 || samucha < 0 || jilapi < 0) {
        return "all parameters should be a positive number";
    }
    const singaraPrice = 10;
    const samuchaPrice = 10;
    const jilapiPrice = 20;

    const singaraTotal = singaraPrice * singara;
    const samuchaTotal = samuchaPrice * samucha;
    const jilapiTotal = jilapiPrice * jilapi;

    const total = singaraTotal + samuchaTotal + jilapiTotal;

    return {
        singara: singaraTotal,
        samucha: samuchaTotal,
        jilapi: jilapiTotal,
        total: total
    };
}

const pandaCost = PandaCost(2, 1,1);
console.log(pandaCost);
