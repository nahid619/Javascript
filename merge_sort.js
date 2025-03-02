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

function mergesort(arr)
{
   
    let n=arr.length;

    if(n<=1) return arr;

    let mid=Math.floor(n/2);

    let leftarr=arr.slice(0,mid);
    let rightarr=arr.slice(mid);
    
    return merge(mergesort(leftarr), mergesort(rightarr));
}

function merge(leftarr, rightarr)
{
    let result=[];
    let i=0;
    let j=0;
    while(leftarr.length>i && rightarr.length>j)
    {
        if(leftarr[i]<rightarr[j])
        {
            result.push(leftarr[i]);
            i++;
        }
        else{
            result.push(rightarr[j]);
            j++;
        }
    }

    while (i < leftarr.length) {
        result.push(leftarr[i]);
        i++;
    }
    while (j < rightarr.length) {
        result.push(rightarr[j]);
        j++;
    }

    return result;
}

rl.question("Size of the array: ",function(n){
    n=parseInt(n);
    array(n);
    console.log(mergesort(arr));
    rl.close();
});