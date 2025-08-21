function cipher(word) {
 let x = parseInt(word, 36)
 exp0 = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])).toString(16)
 exp = exp0.replaceAll(00, '')
 return exp0
}
function gen() {
 let x = Math.random()*10**16
 exp0 = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])).toString(16)
 exp = exp0.replaceAll(00, '')
 return exp0
}
