function cipher(word) {
let x = parseInt(word, 36)
let exp = BigInt(parseInt(BigInt(Math.pow(x, 1/x).toExponential(64)*10**64)).toString())
return parseInt(exp).toString(16)
}
function gen() {
let x = Math.random()*10**16
let num = Math.pow(x, 1/x).toExponential(64)*10**64
let exp = BigInt(parseInt(BigInt(Math.pow(x, 1/x).toExponential(64)*10**64)).toString())
return parseInt(exp).toString(16)
}
function base16(word) {
    word.toString(16)
}
function base10(n) {
    n.toString(10)
}
// Newton's Method implementation in JavaScript
function newtonsMethod(x, initialGuess = 0.6, tolerance = 1e-12, maxIterations = 100) {
    let b = initialGuess;
    for (let i = 0; i < maxIterations; i++) {
        // f(b) = x^b - b
        let f_b = Math.pow(x, b) - b;
        // f'(b) = x^b * ln(x) - 1
        let f_prime_b = Math.pow(x, b) * Math.log(x) - 1;
        // Check if derivative is too small
        if (Math.abs(f_prime_b) < 1e-15) break;
        // Newton's iteration
        let b_new = b - f_b / f_prime_b;
        // Check convergence
        if (Math.abs(b_new - b) < tolerance) return b_new;
        b = b_new;
    }
    return b;
}
function decipher(x) {
let result = parseInt(newtonsMethod(base10(x), 0.6).toExponential(-64));
console.log(`Solution: b = ${result}`);

// Convert to base36
let base36Result = result.toString(36);
console.log(`Word: ${base36Result}`);

// Verification
let verification = Math.pow(x, result);
console.log(`Verification: ${x}^${result} = ${verification}`);
console.log(`Error: ${Math.abs(verification - result)}`);
}
