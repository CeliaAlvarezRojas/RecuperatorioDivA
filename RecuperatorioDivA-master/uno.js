/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
 let nombre;
 let peso;
 let sexo;
 let edad;
 let contadorMujeres = 0 ;
 let edadPromedio;
 let acumEdad =0;
 let hombremaspesado;
 let pesomax;
 let flagHombre =0;


 for( let i = 0; i<5; i++){

	nombre = prompt("Ingresar nombre");
	while (!isNaN (nombre)|| nombre == ""){
		nombre = prompt(" Nombre invalido! Ingresar nombre");
	}
	peso = parseFloat(prompt("Ingresar peso"));
	while(peso< 0 || peso > 600){
		peso = parseFloat(prompt("Peso invalido! Ingresar peso"));
	}
	sexo = prompt("Ingresar sexo f o m ");
	while(sexo !="f" && sexo !="m"){
		sexo = prompt("Sexo invalido! Ingresar sexo f o m ");
	}
	edad = parseInt(prompt("Ingresar Edad"));
	while (edad < 0 || edad > 120){
		edad = parseInt(prompt("Edad invalido! Ingresar Edad"));
	}
	acumEdad+=edad;

	if(sexo == "f"){
		contadorMujeres++;
	}
	else {
		if (flagHombre == 0  || peso > pesomax){
			pesomax= peso;
			hombremaspesado = nombre;
			flagHombre = 1;
		}
	}
	
 }
   
 
    edadPromedio= acumEdad/5;
      if (contadorMujeres == 0){
	  console.log(" No ingresaron mujeres");
     }
     else {
	 console.log("A: La Cantidad de mujeres son: "+ contadorMujeres);
     }
  
     console.log ("B: La edad promedio en total es: "+ edadPromedio);
     console.log ("C : El hombre mas pesado es: " +hombremaspesado + "Su peso es: " + pesomax);

}
