function cipher(word) {
 let x = parseInt(word, 36)
 hex = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])).toString(16)
 return hex.replaceAll('00', '')
}
function gen() {
 let x = Math.random()*10**16
 hex = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])).toString(16)
 return hex.replaceAll('00', '')
}
