function quitarG(){

	// Texto
	let url1 = document.getElementById("url1").value;
	let url2 = document.getElementById("url2").value;

	// Usando substring
	let parte1 = url1.substring(0, 27);
	let parte2 = url1.substring(28, 32);
	let parte3 = url1.substring(33);

	let resultado1 = parte1 + " " + parte2 + " " + parte3;

	// Usando replace
	let reusltado2 = url2.replace(/-/g, " ");

	document.getElementById("sinG1").innerHTML = "La nueva cadena de URL es : " + resultado1;
	document.getElementById("sinG2").innerHTML = "La nueva cadena de URL es : " + reusltado2;
}
