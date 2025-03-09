// Reverse an integer without converting it into a string.
// Example: 12345 → Output: 54321.


function abc(num)
{
    let rev=0;
    while(num!=0)
    {
        rev=rev*10+(num%10);
        num=Math.trunc(num/10);
    }
    return rev;
}

let a=12345;
console.log(abc(a));