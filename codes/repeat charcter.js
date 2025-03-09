// Find the first non-repeating character in a string.
// •	Example: "swiss" → Output: "w".

function character(str)
{
    for(let i=0; i<str.length; i++)
    {
        if(str.indexOf(str[i])===str.lastIndexOf(str[i]))
        {
            return str[i];
        }
    }
    return null;
}

let a='swiss';
console.log(character(a));

