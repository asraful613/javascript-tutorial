const today=new Date();
const date=new Date('2024-2-12');
console.log(date.getMonth());

const specificDate=new Date(2030,0,26)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc
  