var tablero = document.querySelector('canvas');
var pincel = tablero.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,1200,800);

function linea(posInicialx,posInicialy,posFinalx,posFinaly,linWidth) {

	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.moveTo(posInicialx,posInicialy);
	pincel.lineWidth = linWidth;
	//Esto configura el grosor de la linea
	pincel.lineTo(posFinalx,posFinaly);
	pincel.stroke();

}
 function escenario () {
 	linea(330,250,330,170,3);
 	linea(330,170,160,170,3);
 	linea(160,170,160,500,3);
 	//Triangulo
 	linea(160,500,90,530,3);
 	linea(160,500,230,530,3);
 	linea(90,530,230,530,3);
 }
 escenario();
 /* pincel.beginPath();
	pincel.moveTo(330,220);
	pincel.lineWidth = 3;
	//Esto configura el grosor de la linea
	pincel.lineTo(330,170);
	pincel.stroke();*/
