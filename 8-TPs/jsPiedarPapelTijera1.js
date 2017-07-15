/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var contadorGano=0;
var contadorPerdio=0;
var contadorEmpato=0;
var resultado

function comenzar()
{
    eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
}//FIN DE LA FUNCIÓN

function piedra()
{
comenzar();
switch(eleccionMaquina)
{
    case 1:
                 resultado="Empato";
                 contadorEmpato++;
                 break;
   case 2:
                resultado="Perdio";
                contadorPerdio++;
                break;
   case 3:
                resultado="Gano!!!!";
                contadorGano++;
                break;                       
}
mostrarresultado()
}//FIN DE LA FUNCIÓN

function papel()
{
comenzar();
switch(eleccionMaquina)
{
    case 1:
            resultado="Gano!!!!";
            contadorGano++;
            break;
    case 2:
            resultado="Empato";
            contadorEmpato++;
            break;
   case 3:
            resultado="Perdio";
            contadorPerdio++;                
            break; 
}
mostrarresultado()
}//FIN DE LA FUNCIÓN
function tijera()
{
comenzar();
switch(eleccionMaquina)
{
    case 1:
            resultado="Perdio";
            contadorPerdio++;
            break;
    case 2:
            resultado="Gano!!!!";
            contadorGano++;
            break;
    case 3:
            resultado="Empato";
            contadorEmpato++;
            break;                 
}
mostrarresultado()
}//FIN DE LA FUNCIÓN  

function mostrarresultado()
{   
    if(contadorGano<contadorPerdio+contadorEmpato && contadorGano+contadorPerdio+contadorEmpato>3)
    {

    }
    alert(resultado + ( " Gano " + contadorGano + " Empato " + contadorEmpato + " Perdio " + contadorPerdio));

}//FIN DE LA FUNCIÓN