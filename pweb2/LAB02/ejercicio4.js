function quitarG(){

	// Texto
	let url = document.getElementById("url").value;

	// Usando substring
	let parte1 = url.substring(0, 27);
	let parte2 = url.substring(28, 32);
	let parte3 = url.substring(33);

	let resultado1 = parte1 + " " + parte2 + " " + parte3;

	// Usando replace
	let reusltado2 = url.replace(/-/g, " ");

	document.getElementById("sinG1").innerHTML = "La nueva cadena de URL es : " + resultado1;
	document.getElementById("sinG2").innerHTML = "La nueva cadena de URL es : " + reusltado2;
}
