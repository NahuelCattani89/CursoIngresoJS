function Mostrar()
{   
    var Importe
    var importeFinal
    
    Importe=prompt("Ingrese un importe");
    Importe=parseInt(Importe);
    importeFinal=(Importe*1.21);
    document.getElementById("importeFinal").value=importeFinal;
      
}
