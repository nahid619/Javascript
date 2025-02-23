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

console.log("array: ",arr);


rl.question('enter the index(m): ', function(m)
{
    m=parseInt(m);

    if(m<0 ||m>arr.length )
        {
            console.log("ERROR!! invalid index!");
        }
    else{
            arr.splice(m,1);
            console.log("Updated array: ",arr)
        }

    rl.close();
    
});

