function Mostrar()
{
    var nota;
    var sexo;
    var cantidad=0;
    var bandera=true;
    var promedio;
    var minimo=11;
    var cantidadm=0;
    var acumulador=0

    while(cantidad<=100)
    {   
        nota=prompt("Ingrese una nota");
        cantidad++;    
        while(nota<0 || nota>10)
        {
            nota=prompt("Ingrese una nota valida");
        }
        nota=parseInt(nota);
        acumulador+=nota
        
        sexo=prompt("Ingrese un sexo");
        while(sexo!="f" && sexo!="m")
        {   
            sexo=prompt("Ingrese un sexo valido");
        }
   
    if(nota<minimo)
    {
        minimo=nota
    }
 if(sexo="m" && nota>=6)
    {
        cantidadm++;
    }

    }

promedio=(acumulador/cantidad)
document.write("el promedio del curso es " + (acumulador/cantidad)+"<BR>");
document.write("la nota minima del curso es "+ (minimo)+ "<BR>");
document.write("la cantidad de hombres con nota mayor a 6 es "+ (cantidadm) +"<BR>");
}
