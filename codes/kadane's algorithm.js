function maxSubarraySum(arr) 
{
    let maxSoFar = -Infinity; 
    let maxEndingHere = 0; 

    for (let num of arr) {
        maxEndingHere += num;

        if (maxEndingHere > maxSoFar) 
        {
            maxSoFar = maxEndingHere;
        }

        if (maxEndingHere < 0) 
        { 
            maxEndingHere = 0; 
        }
    }

    return maxSoFar; 
}

// ইনপুট অ্যারে
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Subarray Sum:", maxSubarraySum(arr)); 
