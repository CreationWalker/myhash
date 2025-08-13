function f(word) {
//let x = Math.random()*10**16
let x = parseInt(word, 36)
let exp = parseInt(Math.pow(x, 1/x).toExponential(100).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b36 = exp.toString(36).replaceAll('0','')
return b36
}
