function countWords(sentence) 
{

    let words = sentence.replace(/[^\w\s]/g, '').trim().split(" ");
    
    return words.length;
}

console.log(countWords("Hello world!")); 
