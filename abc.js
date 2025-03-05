function truckTour(petrolpumps) {
    let startIndex = 0;
    let tank = 0;
    let totalSurplus = 0;

    for (let i = 0; i < petrolpumps.length; i++) {
        let petrol = petrolpumps[i][0];  // Petrol at current pump
        let distance = petrolpumps[i][1]; // Distance to next pump
        let netGain = petrol - distance;  // Petrol gain/loss at this pump

        tank += netGain;
        totalSurplus += netGain;

        // If the tank is negative, we cannot start from 'startIndex'
        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;  // Reset tank
        }
    }

    // If the total surplus is negative, no solution exists
    if (totalSurplus < 0) {
        return -1;
    }

    console.log(startIndex);
}

// Sample Input
const petrolpumps = [
    [1, 5],  // Petrol: 1, Distance: 5
    [10, 3], // Petrol: 10, Distance: 3
    [3, 4]   // Petrol: 3, Distance: 4
];

// Function Call
console.log("Result:", truckTour(petrolpumps)); // Output: 1
