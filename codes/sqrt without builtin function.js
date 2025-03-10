//perfect squears
function sqrt(a)
{
    if(a<0) return -1;

    if(a==0 || a==1) return a;

    for(let i=0; i<a; i++)
    {
        if(i*i==a)
        {
            return i;
        }
    }
}

let a=25;
console.log(sqrt(a));