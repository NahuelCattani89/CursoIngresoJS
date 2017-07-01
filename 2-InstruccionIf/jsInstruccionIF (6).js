function Mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById("edad").value;
if (edad>=18)
{
    alert("es adulto");
}
else
{
if (edad<13)
{
    alert("es niño");
} 
    alert("es adolescente");    
}

}//FIN DE LA FUNCIÓN