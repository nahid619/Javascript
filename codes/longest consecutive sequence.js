// 10. Find the longest consecutive sequence in an unsorted array.
// •	Example: [100, 4, 200, 1, 3, 2] → Output: 4 (sequence: 1, 2, 3, 4).

function abc(num)
{
    let streak=1;
    let maxstreak=1;
    num.sort((a,b)=>(a-b));
    for(let i=1; i<num.length; i++)
    {
        if(num[i]==num[i-1])
        {
            continue;
        }
        if(num[i]==(num[i-1]+1))
        {
            streak++;
        }
        else{
            maxstreak=Math.max(maxstreak,streak);
            streak=1;
        }
    }

    return Math.max(maxstreak,streak);

}

let a=[100, 4, 200, 1, 3, 2];
console.log(abc(a));