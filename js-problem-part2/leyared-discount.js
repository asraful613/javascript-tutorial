// first100-->100;
// 101 to 200-->90
// above200-->70
function layeredDiscount(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        const total=quantity*first100Price;
        return total;
    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainaingTotal=remainingQuantity+second100Price;
        const total=first100Total+remainaingTotal;
        return total;
    }
    else{
        const first100Total=100*first100Price;
        const second100Price=100*second100Price;
        const remainaingTotal=remainingQuantity+above200Price;
        const total=first100Price+second100Price+remainaingTotal;
        return total;
    }

}