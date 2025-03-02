'use strict';

const { stdin, stdout } = require('process');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the 1st number: ",function(numA)
{
    numA=parseInt(numA);
    rl.question("Enter the 2nd number: ",function(numB)
    {
        numB=parseInt(numB);
        rl.question("Enter the 3rd number: ",function(numC)
        {
            numC=parseInt(numC);
            if(numA>numB && numA>numC)
            {
                console.log("Number A is bigger.");
            }
            if(numB>numA && numB>numC)
            {
                console.log("Number B is bigger.");
            }
            if(numC>numB && numC>numA)
            {
                console.log("Number C is bigger.");
            }

            rl.close();
        });
    });
    
});