function parImpar() {
	let numero = prompt('Ingresa un número'),
		modulo = numero % 2,
		par = `El número: ${numero} es Par`,
		impar = `El número: ${numero} es Impar`

	return (modulo === 0) ? alert(par) : alert(impar)
}

parImpar()
