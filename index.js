function f() {
let x = Math.random()*10**16
exp = Math.pow(x, 1/x).toExponential(64).replaceAll('0', '').replace('e+0', '').replaceAll('1.', '')
return exp
}
