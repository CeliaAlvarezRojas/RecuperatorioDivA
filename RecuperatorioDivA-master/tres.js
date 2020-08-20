/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	
let sexoTitular;
let lugar;
let temporada;
let cantidadPersonas;
let contadorBariloche =0;
let contadorCataratas =0;
let contadorSalta = 0;
let titularConMaspasajeros;
let lugarMaselegido;
let contadorInvierno = 0;
let acumInvierno = 0;
let flagCantidadPersonas = 0 ;
let promedioPersonas;
let cantidadPasajerosmax;


do{
	sexoTitular = prompt("Ingresar sexo f o m ");
	while(sexoTitular !="f" && sexoTitular !="m"){
		sexoTitular = prompt("Sexo invalido! Ingresar sexo f o m ");
	}
	lugar = prompt('Ingresar lugar “bariloche”, “cataratas” o “salta”');
	while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta" ){
		lugar = prompt('Lugar invalido! Ingresar lugar “bariloche”, “cataratas” o “salta”');
	}
   temporada = prompt( 'Ingresar temporada “otoño”,”invierno, “verano" o ”primavera”');
   while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera" ){
	temporada = prompt('Temporada invalida! Ingresar temporda “otoño”,”invierno, “verano,”primavera” ');
   }
   cantidadPersonas = parseInt(prompt(" Ingresar cantidad de personas"));
   while (cantidadPersonas < 0 || cantidadPersonas > 6){
	cantidadPersonas = parseInt(prompt("Cantidad invalida! Ingresar cantidad de personas")); 
   }
   
   switch (lugar){
	   case "bariloche":
		   contadorBariloche++;

		   break;
		case "cataratas":
			contadorCataratas++;
		   break;
		case "salta":
			contadorSalta++;
			break;
   }
   if (temporada == "invierno"){
	   contadorInvierno++;
	   acumInvierno+= cantidadPersonas;
	   
   } 

   if (flagCantidadPersonas == 0 || cantidadPersonas> cantidadPasajerosmax){
	   cantidadPasajerosmax = cantidadPersonas;
	   titularConMaspasajeros = sexoTitular;
	   flagCantidadPersonas = 1;

   }
	
	seguir = prompt("¿Queres seguir ingresando datos?");

 } while (seguir == "s");


 if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
	 lugarMaselegido = "bariloche";
	 }
      else if ( contadorCataratas> contadorBariloche && contadorCataratas > contadorSalta){
		  lugarMaselegido = "cataratas";
	  }
	  else{
		  lugarMaselegido = "salta";
	  }

	  promedioPersonas = acumInvierno/contadorInvierno;
 
	  console.log("A: El lugar mas elegido es: " + lugarMaselegido);
	  console.log("B: El sexo de titular que lleva más pasajeros es " + titularConMaspasajeros + " con " +cantidadPasajerosmax + " pasajeros");
	  
	  if (contadorInvierno == 0){
		console.log("No hubo reservas en invierno");
	  }
	  else{
		console.log ("El promedio de personas por viaje, que viajan en invierno es: " + promedioPersonas);
	  }

}

