'use strict';
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fib=[5,17];

rl.question('enter the size of the series: ',function(n){
    n=parseInt(n);
    if(n<2)
    {
        console.log("enter size bigger than 2.");
    }
    else{
        for(let i=2; i<n; i++)
        {
            fib[i]=fib[i-1] + fib[i-2];
        }
        console.log("fibonacci serise is: ",fib);

        fib.sort( () => Math.random()-0.5 );
        let min=fib[0];
        let minindex=0;
        
        console.log("shuffled new serise is: ",fib);
        for(let i=1;i<fib.length; i++)
        {
            if(fib[i]<min)
            {
                min=fib[i];
                minindex=i;
            }
        }
        console.log("Minimum value is: ",min);
        console.log("Value index is: ",minindex);

    }

    rl.close();

});
