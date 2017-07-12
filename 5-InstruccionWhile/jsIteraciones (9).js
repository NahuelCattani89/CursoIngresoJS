function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta=true;
	var bandera=true;
	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero...");
	
	if(bandera)
	{
		maximo=numero;
		minimo=numero;
		bandera=false;
	}
	else
	{
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
	}
	respuesta=confirm("desea continuar");
	}

	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;



}//FIN DE LA FUNCIÓN