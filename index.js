function cipher(word) {
//let x = Math.random()*10**16
let x = parseInt(word, 36)
let exp = parseInt(Math.pow(x, 1/x).toExponential(100).replaceAll('0', '').replace('e+', '').replaceAll('1.', ''))
let b16 = exp.toString(16).replaceAll('00','')
return b16
}
