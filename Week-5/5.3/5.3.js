
const arr = [1,2,3,4,1,3];

const hasDuplicate = (arr) => 
  arr.length !== new Set(arr).size
       
console.log(`Array has ${hasDuplicate(arr)? `duplicates` : `No Duplicates`}`);
