let arr1 = [1, 3, 5];
let arr2 = [2, 6, 4, 1];

let merge =[...arr1, ...arr2];

merge.sort((a,b)=>(a-b));

console.log(merge);