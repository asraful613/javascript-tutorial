// চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
// টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।
// problem----> 1
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
    // console.log(calculateMoney(-130));


    // এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
// ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
// করবে “Good Name” আর নাম টি খারাপ হলে রি টার্ন করবে “Bad Name”
// problem -----------> 2
    function checkName(name) {
        if(typeof name !=="string"){
            return "Invalid";
        }
        const namecheck = name[name.length-1].toLowerCase(); 
        const goodNameWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w']; 
        if (goodNameWord.includes(namecheck)) {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
// console.log(checkName("RAFEE"));
// console.log(checkName("199")); 

/*
ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]
*/
// problem -----------> 3
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
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})); 


/*
ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হবে ।

Password-Structure :
Website Name
(প্রথম অক্ষর বড় হাতে র হবে )
*/
// problem----------> 4
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

// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));


/*
ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।
*/
// problem-------> 5
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
console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 
