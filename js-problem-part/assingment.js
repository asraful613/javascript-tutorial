function calculateMoney(ticketSale) {
    if(typeof ticketSale !=="number" ||!ticketSale<=0){
        return "Ivalid Number";
    }
    const everyTicketSale=120;
    const ticketQuantity=everyTicketSale*ticketSale;
    const GatemanCost=500;
    const staffCost=50;
    const totalCost=ticketQuantity-(GatemanCost+(8*staffCost));
    return totalCost;
    }


    function checkName(name) {
        if(typeof name !=="string"){
            return "Invalid";
        }
        const namecheck = name[name.length-1].toLowerCase(); 
        const badNameWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w']; 
        if (badNameWord.includes(namecheck)) {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
   

    function deleteInvalids(arr) {
        if (!Array.isArray(arr)) {
            return "Invalid Array";
        }
        const validNumbers = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                validNumbers.push(arr[i]);
            }
        }
    
        return validNumbers;
    }
    

    function password(obj) {
        const name = obj.name;
        const birthYear = obj.birthYear;
        const siteName = obj.siteName;
    
        if (!name || !birthYear || !siteName) {
            return "missing property";
        }
        if (isNaN(birthYear) || birthYear.toString().length !== 4) {
            return "Invalid";
        }
        
        const result = siteName + "#" + name + "@" + birthYear;
        return result;
    }


    function monthlySavings(arr, livingCost) {
        if (!Array.isArray(arr) || typeof livingCost !== 'number') {
            return "invalid input";
        }
    
        let totalIncome = 0;
        for (let i = 0; i < arr.length; i++) {
            totalIncome += arr[i];
        }
        let totalSavings = totalIncome - (totalIncome * 0.2) - livingCost;
        if (totalSavings >= 0) {
            return totalSavings;
        } else {
            return "earn more";
        }
    }
