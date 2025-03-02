'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fib=[0,1];

rl.question('enter the size of the series: ',function(n){
    n=parseInt(n);
    if(n<2)
        {
        console.log("enter size bigger than 2.");
    }
    else
    {
        for(let i=2; i<n; i++)
        {
            fib[i]=fib[i-1] + fib[i-2];
        }
        console.log("serise is: ",fib);
    }
    rl.close();

});
