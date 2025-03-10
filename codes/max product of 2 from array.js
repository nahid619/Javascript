let a=[3, 5, 2, 8, 7];
a.sort((a,b)=>(a-b));
console.log(a);

let n= a.length;
let p=1;
for(let i=n-2; i<n; i++)
{
    p=p*a[i];
}
console.log(p);