function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("ingrese un valor....");
		numero=parseInt(numero);
		
	while(isNaN(numero))
	{
		numero=prompt("Ingrese un numero...");
		numero=parseInt(numero);	
	}
	if(numero<0)
	{
		acumuladorNegativos+=numero;
		contadorNegativos++;	
	}
    else if (numero>0)
	{
		acumuladorPositivos+=numero
		contadorPositivos++;
	}
	else
	{
		contadorCeros++;
	}
	if(numero%2==0)
	{
		contadorPares++;
	}
	
	respuesta=confirm("desea continuar");
	}
	
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	diferenciaPosNeg=contadorPositivos-contadorNegativos;

	document.write(promedioPositivos);
	document.write(promedioNegativos);
	document.write(diferenciaPosNeg);


}//FIN DE LA FUNCIÓN