function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;
	var respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("ingrese un valor....");
		numero=parseInt(numero);
		isNaN(numero)
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
	if(isNaN(promedioPositivos))
	{
		promedioPositivos=("Escriba un numero nuevo");
	}
	if(isNaN(promedioNegativos))
	{
		promedioNegativos=("Escriba un numero nuevo");
	}

	diferenciaPosNeg=contadorPositivos-contadorNegativos;
	if(diferenciaPosNeg<0)
	{
		diferenciaPosNeg*=(-1);
	}
	
	document.write(promedioPositivos);
	document.write(promedioNegativos);
	document.write(diferenciaPosNeg);


}//FIN DE LA FUNCIÓN