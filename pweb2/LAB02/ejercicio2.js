document.addEventListener('DOMContentLoaded', function{){
	let cad = document.querySelector("#Cad");
	let button = document.querySelector("#Invertir")
}



function invertir () {
	let cad = document.getElementById("Cad").value;
	console.log(cad);

	let invertido = "";

	for (let i = cad.length - 1; i >= 0; i--) {
		invertido = invertido + cad.charAt(i);
	}

	return invertido;
}

//console.log(invertir());
