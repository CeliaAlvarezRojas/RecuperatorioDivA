/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

  let marca;
  let precio;
  let peso;
  let tipo;
  let seguir;
  let acumPeso =0;
  let flagsolido = 0;
  let flagliquido = 0;
  let marcaMascaroliquido;
  let marcaMasBaratoSolido;
  let preciomax;
  let preciomin;




  do {

    marca= prompt("Ingresar marca");
	   while (!isNaN (marca)|| marca == ""){
    marca = prompt(" Nombre invalido! Ingresar marca");
    }
    precio = parseFloat(prompt("Ingresar precio"));
    while(precio < 100 || precio > 600){
    precio = parseFloat(prompt(" Precio invalido! Ingresar precio"));
    }
    peso = parseFloat(prompt("Ingresar peso"));
	 while(peso< 0 || peso > 800){
    peso = parseFloat(prompt("Peso invalido! Ingresar peso"));
   }
    tipo = prompt(' Ingresar tipo: "solido" o "liquido');
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt('Tipo invalido! Ingresar tipo: "solido" o "liquido"');
    }
    acumPeso+=peso;

    if (tipo =="liquido"){
      if (flagliquido == 0 || precio > preciomax ){
         preciomax = precio;
         marcaMascaroliquido = marca;
         flagliquido = 1;  
      }
    }
     else {
      if (flagsolido == 0 || precio<preciomin ){
        preciomin = precio;
        marcaMasBaratoSolido = marca;
        flagsolido = 1;  
      } 
     }

   seguir = prompt("¿Queres seguir ingresando datos?");

  } while (seguir == "s");

  console.log("A: Peso total de la compra es: " + acumPeso);
  console.log("B:la marca del más caro de los líquidos es: " + marcaMascaroliquido);
  console.log ("C: La marca del más barato de los sólidos es: "+marcaMasBaratoSolido);

}


