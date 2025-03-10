let a=123456;
a=a.toString().split('');
let sum=0;
for(let i=0; i<a.length; i++)
{
    sum=sum+parseInt(a[i]);
}

console.log(sum);
