function Mostrar()
{
    var num=prompt("Ingrese un numero");
    var cont=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            cont++;
            console.log(i);
        }
    }
console.log(cont);



}//FIN DE LA FUNCIÓN