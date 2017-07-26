function Mostrar()
{
var num=prompt("Ingrese un numero");
var cont=0;

for(i=1;i<=num;i++)
{   
    if(num%2==0 && i%2==0)
    {
        cont++;
        console.log(i);
    }
}
console.log(cont);


}//FIN DE LA FUNCIÓN