
function Mostrar()
{
    var laBase
    var Mostrar
    var Perimetro

    laBase=document.getElementById("laBase").value;           
    laBase=parseInt(laBase);
    Perimetro=(laBase+laBase+laBase+laBase);
    alert("el Perimetro es " + Perimetro);
}
