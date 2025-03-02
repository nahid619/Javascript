'use strict';
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr=[];
function array(n)
{
    for(let i=0;i<n;i++)
    {
        arr.push(Math.floor(Math.random()*100));
    }
    console.log("Array is: ",arr);
}

const even=[];
const odd=[];
function oddeven(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2 == 0)
        {
            even.push(arr[i]);
        }
        else
        {
            odd.push(arr[i]);
        }
    }
    console.log("Odd numbers array is: ",odd);
    console.log("Even numbers array is: ",even);
}

rl.question("Size of the array: ",function(n){
    n=parseInt(n);
    array(n);
    oddeven(arr);
});