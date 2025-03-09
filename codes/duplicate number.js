function arr(arr)
{
    let n=arr.length;
    arr.sort((a,b)=>a-b);
    for(let i=0; i<n;i++)
    {
        if (arr[i]==arr[i+1])
        {
            return arr[i];
        }
    }
}
let input=[1, 2, 3, 4, 2];
console.log(arr(input))