function countVowels(str) 
{
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}


let text = "hello world";
console.log("Vowel Count:", countVowels(text));
