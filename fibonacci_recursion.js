'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const memo = {}; // Object to store computed values

function fibonacciMemo(n) 
{
    if (n in memo) return memo[n];  // Check if already computed
    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2); // Store result
    return memo[n];
}

// Generate Fibonacci series up to N terms
function generateFibonacciMemo(n) 
{
    let fibSeries = [];
    for (let i = 0; i < n; i++) {
        fibSeries.push(fibonacciMemo(i));
    }
    return fibSeries;
}


rl.question('enter the size of the series: ',function(n){
    n=parseInt(n);
    if(n<2)
    {
        console.log('!!error!! invalid input!');
    }
    else{
        console.log(generateFibonacciMemo(n));
    }
    rl.close();
});
