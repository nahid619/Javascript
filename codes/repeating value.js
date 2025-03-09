function firstNonRepeatingUsingIndex(arr) {
    for (let num of arr) 
        {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            return num;
        }
    }
    return -1; 
}


console.log(firstNonRepeatingUsingIndex([4, 5, 1, 2, 5, 1, 4, 3, 2])); 
