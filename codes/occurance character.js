function countOccurrences(str, char) 
{
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countOccurrences("hello", 'l')); // Output: 2
console.log(countOccurrences("banana", 'a')); // Output: 3
console.log(countOccurrences("mississippi", 's')); // Output: 4
console.log(countOccurrences("abcdef", 'z')); // Output: 0
