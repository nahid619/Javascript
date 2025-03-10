let a=153;
let sum=0;

a=a.toString();

for(let i=0; i<a.length; i++)
{
    sum=sum+Math.pow(parseInt(a[i]),3);
}

if(sum==a)
{
    console.log('True');
}
else
{
    console.log('False');
}