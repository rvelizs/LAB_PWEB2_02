function invertir () {
	let cad = document.getElementById("Cad");
	console.log(cad);

	let invertido = "";

	for (let i = cad.length - 1; i >= 0; i--) {
		invertido = invertido + cad.charAt(i);
	}

	return invertido;
}

//console.log(invertir());
