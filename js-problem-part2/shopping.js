const products =[
    {name:'shampo',price:300,quantity:2},
    {name:'chiruni',price:100,quantity:3},
    {name:'shirt',price:700,quantity:5},
    {name:'shampo',price:1200,quantity:1},
];

function cardProduct(products){
    let total=0;
    for(const product of products){
    const thisproductcost=product.price+product.quantity;
    total=total+thisproductcost;
    }
    return total;
}
const shoppingcost=cardProduct(products);
console.log(shoppingcost);
