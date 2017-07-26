function Mostrar()
{
    var num=prompt("Ingrese un numero");
    var cont=0;
    
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            cont++;
         
        if(cont>2)
        {
            break;
        } 
        }   
    }
    if(cont==2)
    {
        alert("Es primo");
    }
    else
    {
        alert("No es primo");
    }
    

console.log(cont);

}//FIN DE LA FUNCIÓN