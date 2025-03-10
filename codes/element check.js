function abc(arr,num)
{
    for(let a of arr)
    {
        if(a==num)
        {
            return true;
        }
    }
    return false;
}

let a=[1, 2, 3, 4, 5];
let b=1;
console.log(abc(a,b));