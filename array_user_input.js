'use strict';

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the elements: ', function(n){

    n=parseInt(n);

    let arr=[];
    let count=0;

    function getelement(){

        if(count<n)
        {
            rl.question('element $(count+1) is: ', function(x){
                arr.push(x);
                count++;
                getelement();
            });
        }
        else
        {
            console.log("final array is: ", arr);
            rl.close();
        }
    }

    getelement();


});