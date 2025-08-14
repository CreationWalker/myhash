function cipher(word) {
//let x = Math.random()*10**16
let x = parseInt(word, 36)
let exp = parseInt(Math.pow(x, 1/x).toExponential(100).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b16 = exp.toString(16).replaceAll('00','')
return b16
}
function gen() {
let x = Math.random()*10**16
let exp = parseInt(Math.pow(x, 1/x).toExponential(100).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b16 = exp.toString(16).replaceAll('00','')
return b16
}
function decipher(x) {
    if (typeof x !== 'number') {
        x = Number(x);
    }
    if (isNaN(x) || x <= 0) {
        return "NaN";
    }
    if (x === 1) {
        return "1";
    }
    const xExp = Math.exp(1 / Math.E);
    if (x > 1 && x > xExp) {
        return "NaN";
    }
    let b = (x < 1) ? 0.5 : 1.5;
    const MAX_ITER = 100;
    const TOL = 1e-8;
    let iter = 0;
    let diff;
    do {
        let xb = Math.pow(x, b);
        let f = xb - b;
        let logx = Math.log(x);
        let fprime = logx * xb - 1;
        if (Math.abs(fprime) < 1e-15) {
            break;
        }
        diff = f / fprime;
        b = b - diff;
        iter++;
    } while (iter < MAX_ITER && Math.abs(diff) > TOL);
    return b.toString(16);
}


