function Mostrar()
{
//tomo la edad  
var edad
var estadoCivil
document.getElementById("edad").value=edad;
document.getElementById("estadoCivil").value=estadoCivil;
if(edad<18 && estadoCivil!=soltero)
{
    alert("Es muy pequeño para NO ser soltero");
}
else(edad>=18 && estadoCivil==soltero)
{
    alert("Es muy pequeño para ser soltero");   
}
}//FIN DE LA FUNCIÓN