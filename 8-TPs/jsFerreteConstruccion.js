/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo
    var Ancho
    var Radio
    Largo=document.getElementById("Largo").value;
    Ancho=document.getElementById("Ancho").value;
    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    Radio=parseInt(Radio);
    Radio=(((Largo*2)+(Ancho*2))*3);
    alert(Radio);
}
function Circulo () 
{
    var Area
    var Radio
    Radio=document.getElementById("Radio").value;
    Area=parseInt(Area);
    Radio=parseInt(Radio);
    Area=((2*Math.PI*Radio)*3);
    alert(Area);
	
}
function Materiales () 
{
    var Largo
    var Ancho
	Largo=document.getElementById("Largo").value;
    Ancho=document.getElementById("Ancho").value;
    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    cal=(Largo*Ancho)*3;
    cemento=(Largo*Ancho)*2;
    alert(cal + "bolsas de cal" + cemento + "bolsas de cemento");
}