
function cipher(word) {
 let x = parseInt(word, 36)
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64)
 return exp
}
function gen() {
 let x = Math.random()*10**16
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64)
 return exp
}
function base16(bigIntValue) {
    if (bigIntValue === 0n) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";
    let value = bigIntValue < 0n ? -bigIntValue : bigIntValue;

    while (value > 0n) {
        const remainder = value % 16n;
        result = hexChars[Number(remainder)] + result;
        value = value / 16n;
    }

    if (bigIntValue < 0n) {
        result = "-" + result;
    }

    return result;
}

function base10(x) {
 return bigInt(x).toString(10)
}
// Newton's Method implementation in JavaScript
function newtonSolve(xHex, tolerance = 1e-12, maxIter = 1000) {
  // Convert hex string to BigInt
  const xBigInt = BigInt('0x' + xHex);

  // Convert BigInt to Number (may lose precision if very large)
  const x = Number(xBigInt);
  if (!isFinite(x)) {
    throw new Error('x is too large to convert to Number safely');
  }

  // Define f(b) = x^b - b
  // and f'(b) = x^b * ln(x) - 1
  const lnX = Math.log(x);

  // Initial guess for b
  let b = 1.0;

  for (let i = 0; i < maxIter; i++) {
    const xPowB = Math.pow(x, b);
    const f = xPowB - b;
    const fPrime = xPowB * lnX - 1;

    if (Math.abs(fPrime) < 1e-15) {
      throw new Error('Derivative too small, no convergence');
    }

    const bNext = b - f / fPrime;

    if (Math.abs(bNext - b) < tolerance) {
      b = bNext;
      break;
    }

    b = bNext;
  }

  // Convert b to BigInt by rounding
  const bBigInt = BigInt(Math.round(b));

  // Convert BigInt to base36 string
  return bBigInt.toString(36);
}
function decipher(x) {
const xHex = x; // hex for 16 decimal
const resultBase36 = newtonSolve(xHex);
console.log(`Approximated b in base36: ${resultBase36}`);
}
