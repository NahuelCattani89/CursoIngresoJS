/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
numeroSecreto=Math.floor(Math.random()*100)+1;	 
	
}

function verificar()
{
contadorIntentos=contadorIntentos+1;
document.getElementById("intentos").value=contadorIntentos;
numero=document.getElementById("numero").value	
if((contadorIntentos==1)&&(numero==numeroSecreto))	
{
	alert("Usted es un psiquico");
contadorIntentos=0;
}
else if((contadorIntentos==2)&&(numero=numeroSecreto))
	{
		alert("Excelente percepcion");
        contadorIntentos=0	
    }
	else if((contadorIntentos==3)&&(numero=numeroSecreto))
	{
		alert("Esto es suerte");
	    contadorIntentos=0;	
	}
	else if((contadoIntentos==4)&&(numero=numeroSecreto))
	{
		alert("Excelente tecnica");
	    contadorIntentos=0;	
	}
	else if((contadorIntentos==5)&&(numero=numeroSecreto))
	{
		alert("Usted esta en la media");
		contadorIntentos=0;
	}
	else if((contadorIntentos>=6)&&(numero=numeroSecreto))
	{
		alert("falta tecnica");
		contadorIntentos=0;
	}
	else if((contadorIntentos>=10)&&(numero=numeroSecreto))
	{
		alert("afortunado en el amor");
		contadorIntentos=0;
	}
}
