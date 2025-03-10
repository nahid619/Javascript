function isPalindrome(str) 
{
    // // Convert string to lowercase to ignore case and remove non-alphabetic characters (optional)
    // str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string and compare with the original string
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
