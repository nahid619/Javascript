'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr=[];

for(let i=0;i<10;i++)
{
    arr.push(i+1);
}

//shuff;e
arr.sort(()=>Math.random()-0.5);
console.log(arr);

//user unpit the serach element
rl.question('enter the seach element: ', function(n){

    n=parseInt(n);
    let found=false;
    //let pos=[];
    let pos;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===n)
        {
            found=true;
           // pos.push(i);
            pos=i;
        }
    }
    console.log(`index is: ${pos}`)

    rl.close();
});

