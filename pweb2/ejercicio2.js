function invertir (cad) {
	let invertido = "";

	for (let i = cad.length - 1; i >= 0; i--) {
		invertido = invertido + cad.charAt(i);
	}

	return invertido;
}


