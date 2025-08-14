function cipher(word) {
let x = parseInt(word, 36)
let exp = parseInt(Math.pow(x, 1/x).toExponential(64).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b16 = exp.toString(16)
return b16
}
function gen() {
let x = Math.random()*10**16
let exp = parseInt(Math.pow(x, 1/x).toExponential(64).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b16 = exp.toString(16)
return b16
}
function base16(word) {
    word.toString(16)
}
function base10(n) {
    n.toString(10)
}
function decipher(base10(x)) {
  if (x <= 0) {
    return "NaN";   // or NaN.toString(16) -> "NaN"
  }
  if (x === 1) {
    return (1).toString(16);   // "1"
  }
  const xExp = Math.exp(1/Math.E); // approximately 1.444667861
  if (x > 1 && x > xExp) {
    return "NaN";
  }
  let b0;
  if (x < 1) {
    b0 = 0.5;
  } else {
    b0 = 1.5;
  }
  const MAX_ITER = 100;
  const TOL = 1e-8;
  let iter = 0;
  let b = b0;
  let diff;
  do {
    // Compute f and fprime
    let xb = Math.pow(x, b);
    let f = xb - b;
    let fprime = Math.log(x) * xb - 1;
    if (Math.abs(fprime) < 1e-12) {
      // Avoid division by zero, break and use current b.
      break;
    }
    diff = f / fprime;
    b = b - diff;
    iter++;
  } while (iter < MAX_ITER && Math.abs(diff) > TOL);
  return b.toString(16);
}


