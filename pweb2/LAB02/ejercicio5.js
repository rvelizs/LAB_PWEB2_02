var numElementos = document.getElementById("nElementos").value;

// Para crear la distribución
fil = Math.floor(Math.random() * numElementos) + 1;
col = 0;
// *
if(numElementos % fil != 0) {
	col = numElementos / fil + 1;
}
else {
	col = numElementos / fil;
}

console.log(fil + " ; " + col);
