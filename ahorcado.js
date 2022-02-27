var tablero = document.querySelector('canvas');
var pincel = tablero.getContext('2d');
var palabras = ["TABLERO","COMIDA","GATO","TIMIDO"]
var btnAgregar = document.getElementById('nueva-palabra')
var btnIniciar = document.getElementById('iniciar-juego')
var posicionInicialErrada = 50;
var palabraJuego = [];
var intentos =0;
var letrasAcertadas = [];

//DIBUJAR 
function linea(posInicialx,posInicialy,posFinalx,posFinaly,linWidth) {

	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.moveTo(posInicialx,posInicialy);
	pincel.lineWidth = linWidth;
	//Esto configura el grosor de la linea
	pincel.lineTo(posFinalx,posFinaly);
	pincel.stroke();

}
function escribirTextoAcertado(letras,x) {
  var posicionInicialx = 400+x;
  pincel.font ='bold 35px arial'
  pincel.fillText(letras,posicionInicialx,480,70)
  pincel.fill();
}
function escribirTextoErrado(letras,x,y) {
  var posicionInicialx = 200+x;
  pincel.fillStyle = 'red';
  pincel.font ='bold 35px arial'
  pincel.fillText(letras,posicionInicialx,y,70)
  pincel.fill();
}

 function cabeza() {

 	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.arc(330,250,30,0,2*3.14);
	pincel.fill();
	pincel.fillStyle = 'white';
	pincel.beginPath();
	pincel.arc(330,250,28,0,2*3.14);
	pincel.fill();

 }
 function cuerpo() {

 	linea(330,280,330,380,2);
 	
 }
 function brazoIzquierdo() {

 	linea(330,320,280,290,2)
 }
 function brazoDerecho() {
 	linea(330,320,380,290,2)
 }
 function piernaDerecha() {
  linea(330,380,280,420,2);
 }
 function piernaIzquierda() {
  linea(330,380,380,420,2)
 }
//FUNCIONES
 function inicializarPalabra() {
   let randomWord = Math.floor(Math.random() * palabras.length)
   var palabra = palabras[randomWord]
   return palabra
 }
 //liniaInicio(palaraRandom);
 /*document.addEventListener("keyup", function (Event) {
 	var letra = Event.key
 	console.log(letra)
 })*/

 //EVENTOS 
 btnAgregar.addEventListener('click', function(){
   var input = document.getElementById("input-nueva-palabra");
   return palabras.push(input.value);
 })
 btnIniciar.addEventListener('click', function(){
   //location.reload();
    palabraJuego = [];
    let palabraRandom = inicializarPalabra();
    let xInicial = 400;
    let xFinal = 430;
    for (let i=1;i<=palabraRandom.length;i++){
      linea(xInicial,500,xFinal,500,5);
      xInicial = xInicial+50;
      xFinal = xFinal+50;
      palabraJuego.push(palabraRandom.charAt(i-1));
      //console.log(palabraJuego);     
    }
    document.addEventListener('keyup', function(Event){
      var letra = Event.key
      var Codigo = Event.keyCode
      letra =letra.toUpperCase();
      console.log(letra);
      console.log(Codigo);
      for (let i =0;i<=palabraRandom.length-1;i++) {
        if (letra==letrasAcertadas[i]) {
          alert('usted ya ingreso esta palabra');
          break;
        } else if (letra==palabraRandom.charAt(i)) {
            if (letrasAcertadas.length<=palabraRandom.length-1){
              letrasAcertadas.splice(i-1,0,letra)
            }
            var posicionX = 50 * i;
            escribirTextoAcertado(letra,posicionX);
            //idea, multiplica la posicion en X por el indice
          }  
        /*console.log(palabraRandom.charAt(i));
        console.log(letrasAcertadas);*/
      }
        var palabraErrada = false;
        for (let i =0; i<=palabraJuego.length; i++) {
            if (palabraJuego[i] == letra) {
              palabraErrada = true;
              break;
            }
        }
        if (palabraErrada==false) {
          var posicionErrada = 50 + posicionInicialErrada;
          intentos = intentos+1;
          escribirTextoErrado(letra,posicionErrada,120);
          posicionInicialErrada = posicionInicialErrada + 50;
          //console.log("el numero de intentos es:" + intentos)
        }
        if (letrasAcertadas.length == palabraJuego.length) {
          alert('Felicidades, usted ha ganado, la palabra era: ' + palabraJuego.join("") + ' :D');
          //El metodo join sirve para unir los elementos de un array
        }
        switch (intentos) {

          case 1:
            cabeza();
            break;
          case 2:
            cuerpo();
            break;
          case 3:
            brazoDerecho();
            break;
          case 4:
            brazoIzquierdo();
            break;
          case 5:
            piernaDerecha();
            break;
          case 6:
            piernaIzquierda();
            alert('perdiste la palabra era ' + palabraJuego.join("") + ' intentalo de nuevo :D');
            location.reload();
            break;
          default:
            break;

        }

    })
  })

 //el keycode de las letras va de 65 hasta 90 (sin contar la Ñ que tienen un codigo de 195 o algo asi)