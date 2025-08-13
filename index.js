function f(word) {
//let x = Math.random()*10**16
lex x = parseInt(word, 36)
exp = Math.pow(x, 1/x).toExponential(64).replaceAll('0', '').replace('e+', '').replaceAll('1.', '')
return exp
}
