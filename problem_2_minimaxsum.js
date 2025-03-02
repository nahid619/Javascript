'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) {
    // Write your code here
    arr.sort(function(a,b){return(a-b)});
    let sum1=0;
    let sum2=0;
    for(let i=0; i<arr.length-1; i++)
    {
        sum1=sum1+arr[i];
    }
    for(let i=1; i<arr.length; i++)
    {
        sum2=sum2+arr[i];   
    }
    console.log(sum1, sum2);
}

function main() 
{
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}


