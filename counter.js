'use strict';

const createCounter = function(init) 
{
    let count = init;

    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        reset: function() {
            count = init;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
};

const counter = createCounter(5);

console.log(counter.getValue()); // Outputs: 5
console.log(counter.increment()); // Outputs: 6
console.log(counter.increment()); // Outputs: 7
console.log(counter.decrement()); // Outputs: 6
console.log(counter.reset());     // Outputs: 5
console.log(counter.getValue());  // Outputs: 5
