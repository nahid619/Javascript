function longestWord(sentence)
{
    let words = sentence.replace(/[^\w\s]/g, '').split(' ');

    let longest = "";

    for (let i = 0; i < words.length; i++) 
    {
        let current = words[i]; 
        if (current.length > longest.length) 
        {
            longest = current;
        }
    }

    return longest; // Return the longest word found
    
}

console.log(longestWord("I love programming!"));