'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) 
{
    // Write your code here

    let pd= s.slice(-2);
    let [hh,mm,ss] = s.slice(0,-2).split(":");
    hh=parseInt(hh);

    if(pd=='AM' && hh==12)
    {
        hh=0;
    }
    if(pd=='PM' && hh!=12)
    {
        hh=hh+12;
    }


    return String(hh).padstart(2,'0')+':'+mm+':'+ss;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
