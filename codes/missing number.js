function findMissingNumber(arr, n) 
{
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

let arr = [1, 2, 4, 5];
let n = 5;
console.log(findMissingNumber(arr, n)); // Output: 3
