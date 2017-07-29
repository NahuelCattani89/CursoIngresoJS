function Mostrar()
{
  
    var MayorVentas;
    var MenorVentas;
    var cantidad=0;
    var contador=0;
    var bandera=true;
    var numero;

while(cantidad<24)
{
numero=prompt("Ingrese un importe");
    while(numero<=1)
    {
        numero=prompt("Ingrese un nuevo importe");
    }
cantidad++;
numero=parseInt(numero);

if(bandera)
{
    MayorVentas=numero;
    MenorVentas=numero;
    bandera=false;  
}
else
{
    if(numero>MayorVentas)
    {
        MayorVentas=numero;
    }
    if(numero<MenorVentas)
    {
        MenorVentas=numero;
    }
    
}
}
alert("La mayor venta fue " + MayorVentas + " y la menor venta fue " + MenorVentas);
}


