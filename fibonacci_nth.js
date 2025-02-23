'use strict';
const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fib=[0,1];

rl.question('enter position number: ',function(n){
    n=parseInt(n);

    let count=0;
    let a=fib[0];
    let b=fib[1];

    while(count<n)
    {
        let temp=a+b;
        a=b;
        b=temp;
        count++;
    }

    console.log(a);
    rl.close();

});
