function abc()
{
    const arr = [];
    const str = String(num);

    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    console.log(arr); 
}

const num = 12345;
abc(num);
