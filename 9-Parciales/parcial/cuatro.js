function Mostrar()
{
    var numero1
    var numero2
    var resultado
    var Mostrar

    numero1=prompt("Elija un numero");
    numero2=prompt("Elija otro numero");
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    
    if(numero1==numero2)
    {
        resultado=numero1*numero2;
    }
    else
    {
        if(numero1>numero2)
        {
            resultado=(numero1-numero2);
        }
    else
    {
        resultado=(numero1+numero2);
    }
    }
    Mostrar=document.write(resultado);
}
