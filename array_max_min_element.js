'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//creating a array
const arr=[];
function array(n)
{
    for(let i=0;i<n;i++)
    {
        arr.push(Math.floor(Math.random()*100));
    }
    console.log("Array is: ",arr);
}

function maxmin(arr)
{
    let maxnum=arr[0];
    let minnum=arr[0];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>maxnum)
        {
            maxnum=arr[i];
        }
        if(arr[i]<minnum)
        {
            minnum=arr[i];
        }
    }
    console.log("Maximum value: ",maxnum);
    console.log("Minimum value: ",minnum);
}

rl.question("Size of the array: ",function(n){
    n=parseInt(n);

    array(n);
    maxmin(arr);
});