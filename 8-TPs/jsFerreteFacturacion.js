/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/	
function Sumar () 
{
    var PrecioTres
    var PrecioDos
    var PrecioUno
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resultado=num1+num2+num3;
    alert(resultado);
}
function Promedio () 
{
    var PrecioTres
    var PrecioDos
    var PrecioUno
	num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resultado=((num1+num2+num3)/3);
    alert(resultado);
}
function PrecioFinal () 
{
	
    var PrecioTres
    var PrecioDos
    var PrecioUno
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    resultado=((num1+num2+num3)*1.21);
    alert(resultado);

}