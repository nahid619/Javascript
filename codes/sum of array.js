function findMissingNumber(arr, N) {
    let large=0;
    for(let i=0; i<N; i++)
    {   
        large=large+arr[i];
    }
    return large;

}

// Example Usage:
let numbers = [10, 5, 8, 3, 20] ; // 3 is missing
let N = 5; // The range is from 1 to 6

console.log("Missing Number:", findMissingNumber(numbers, N)); // Output: 3
