function woodQunatity(chairQuantity,tableQuantity,bedQuantity){
    const perchairwood=3;
    const pertablewood=10;
    const perbedwood=50;

    const chairtotalwood=perchairwood*chairQuantity;
    const tabletotalwood=pertablewood*tableQuantity;
    const bedtotalwood=perbedwood*bedQuantity;

    const totalwood=chairtotalwood+tabletotalwood+bedtotalwood;

    return totalwood;
}
const wood=woodQunatity(0,0,2);
console.log(wood);

// shopping card
function shopping(shirt,pant,shoe){
    const shirtPrice=500;
    const pantPrice=600;
    const shoePrice=900;

    const totalShirt=shirtPrice*shirt;
    const totalPant=pantPrice*pant;
    const totalShoe=shoePrice*shoe;

    const totalProduct=totalShirt+totalPant+totalShoe;

    return totalProduct;
}
const shop=shopping(0,0,1)
console.log(shop);