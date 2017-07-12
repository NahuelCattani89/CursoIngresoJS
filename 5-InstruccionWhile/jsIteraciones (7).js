function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
    var promedio
	
	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un numero...");
		numero=parseInt(numero);
		respuesta=prompt("desea continuar");	
	}
	while(isNaN(numero))
	{
		numero=prompt("Ingrese un numero...");
		numero=parseInt(numero);	
	}
	acumulador=acumulador+numero;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN