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

function bubble()
{
    let n=arr.length;
    let swapped;

    for(i=0; i<n-1; i++)
    {
        swapped=false;
        for(j=0; j<n-i-1; j++)
        {
            
        }
    }
}

rl.question('Enter the size of the array (n): ', function(n) {
    n = parseInt(n);
    if(n<=0) { console.log("invalid input");}
    array(n);
    bubble(arr);
    
    rl.close();
});
