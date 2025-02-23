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

rl.question('Enter the size of the array (n): ', function(n) {
    n = parseInt(n);
    if(n<=0) { console.log("invalid input");}
    array(n);
    
    rl.close();
});
