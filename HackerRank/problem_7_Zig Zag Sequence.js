function processData(input) {
    // Split the input into lines
    const lines = input.trim().split('\n');
    let currentLine = 1;

    while (currentLine < lines.length) {
        const n = parseInt(lines[currentLine]);
        currentLine++;
        const a = lines[currentLine].split(' ').map(Number);
        findZigZagSequence(a, n);
        currentLine++;
    }
}

function findZigZagSequence(a, n) {

    a.sort((x, y) => x - y);
    const k = Math.floor((n + 1) / 2);
    const mid = k - 1;
    [a[mid], a[n - 1]] = [a[n - 1], a[mid]];

    let st = mid + 1;
    let ed = n - 2;
    while (st <= ed) {
        [a[st], a[ed]] = [a[ed], a[st]];
        st++;
        ed--;
    }

    let output = "";
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            output += " ";
        }
        output += a[i];
    }
    console.log(output);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});