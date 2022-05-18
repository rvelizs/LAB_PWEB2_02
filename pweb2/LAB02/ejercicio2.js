function invertir() {
	let cad = document.getElementById("Cad").value;
	let invertido = "";

	for (let i = cad.length - 1; i >= 0; i--) {
		invertido = invertido + cad.charAt(i);
	}

	document.getElementById("nCad").innerHTML = invertido;
}
