  // const numbers = [5,53,3,3,33];
  // const double=x =>x*2;
  // const result = numbers.map(double)
  // console.log(result);

  
  // console.log(doubled);
  // const doubled= [];
  // for (const num of numbers){
  //   const double=num*2;
  //   doubled.push(double)
  // }
  // console.log(doubled);

  const numbers =[24,24,232,3,23];
  const doubled =numbers.map(num => num*2);
  const fivebonus = numbers.map(num =>num+5);
  console.log(fivebonus);

  const friends = ['asraful','huq','sujon'];
  const length = friends.map(frnd => frnd.length);
  const firstletter = friends.map(friend =>friend[0])
  console.log(firstletter);