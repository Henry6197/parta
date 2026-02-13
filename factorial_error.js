
let n = 5;
let factorial = 0;  // Logic error: should start at 1, not 0

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);
