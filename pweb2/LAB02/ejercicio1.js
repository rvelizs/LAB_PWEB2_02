const fecha = new Date();
const hoy = fecha.getDate();

console.log(hoy);

function new_Date(d)  {
	if (d == 0) {
		return "Domingo";
	} else if (d == 1) {
		return "Lunes";
	} else if (d == 2) {
		return "Martes";
	} else if (d == 3) {
		return "Miércoles";
	} else if (d == 4) {
		return "Jueves";
	} else if (d == 5) {
		return "Viernes";
	} else if (d == 6) {
		return "Sábado";
	}
}

console.log(new_Date(0));
console.log(new_Date(1));
console.log(new_Date(2));
console.log(new_Date(3));
console.log(new_Date(4));
console.log(new_Date(5));
