'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//random array
const arr=[];
function array(n)
{
    for (let i = 0; i < n; i++) 
        {
            arr.push(Math.floor(Math.random() * 100));
        }
    console.log("✅ Random Array: ", arr);
}

//bubble sort
function bubble(arr)
{
    let n=arr.length;
    let swapped;
    let temp;

    for(let i=0; i<n-1; i++)
    {
        swapped=false;
        for(let j=0; j<n-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped=true;
            }
        }

        if(!swapped)
        {
            break;
        }
    }

    console.log("Bubble sort Array: ", arr);
}

rl.question('Enter the size of the array (n): ', function(n) {
    n = parseInt(n);
    if(n<=0) { console.log("invalid input");}
    array(n);
    bubble(arr);
    
    rl.close();
});
