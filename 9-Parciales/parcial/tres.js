function Mostrar()
{
    var alrgo
    var ancho
    var perimetro

    alrgo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;
    alrgo=parseInt(alrgo);
    ancho=parseInt(ancho);
    perimetro=((alrgo*ancho)*3);
    alert("El perimetro es de "+ perimetro + " mts")

}
