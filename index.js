function cipher(word) {
 let x = parseInt(word, 36)
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64).toString(16)
 return [exp.replaceAll('00', ''), exp.match("00")['index']]
}
function gen() {
 let x = Math.random()*10**16
 exp = BigInt(parseInt(Math.pow(x, 1/x).toExponential(64).split('.')[1])+Math.pow(x, 1/x).toExponential(64).split('.')[0]*10**64).toString(16)
 return [exp.replaceAll('00', ''), exp.match("00")['index']]
}
