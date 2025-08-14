function cipher(word) {
 let x = parseInt(word, 36)
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64)
 return base16(BigInt(exp))
}
function gen() {
 let x = Math.random()*10**16
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64)
 return base16(BigInt(exp))
}
function base16(x) {
 return Object(x).toString(16)
}
function base10(x) {
 return BigInt('0x'+x).toString(10)
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
x = parseInt(BigInt(base10(parseInt(x))))
let result = newtonsMethod(parseInt(BigInt(base10(x)))).toString().toExponential(-64);
console.log(`Solution: b = ${result}`);

// Convert to base36
let base36Result = result.toString(36);
console.log(`Word: ${base36Result}`);

// Verification
let verification = Math.pow(x, result);
console.log(`Verification: ${x}^${result} = ${verification}`);
console.log(`Error: ${Math.abs(verification - result)}`);
}
