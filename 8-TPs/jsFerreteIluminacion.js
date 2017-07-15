/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var Marca;
 	var Cantidad; 
    var precioDescuento;
    var precioDescuentoIIBB;
    Cantidad=document.getElementById("Cantidad").value;
    Cantidad=parseInt(Cantidad);
    precioDescuento=parseInt(precioDescuento);
    precioDescuentoIIBB=parseInt(precioDescuentoIIBB);
    
    if(Cantidad>=6)
    {
        precioDescuento=((Cantidad*35)*0.5);
        
    }
    if(Cantidad=5 && Marca=="ArgentinaLuz")
    {
        precioDescuento=((Cantidad*35)*0.6);
        
    }    
    else if(Cantidad=5)
        {   
           precioDescuento=((Cantidad*35)*0.7);
              
        }
    else if(Cantidad=4 && Marca=="ArgentinaLuz || FelipeLuz")
    {
        precioDescuento=((Cantidad*35)*0.75);
        
    }
    else if(Cantidad=4)
        {
            precioDescuento=((Cantidad*35)*0.8);
            
        }
     else if(Cantidad=3 && Marca=="ArgentinaLuz")
    {
        precioDescuento=((Cantidad*35)*0.85);
        
    }
    else if(Cantidad=3 && Marca=="FelipeLuz")
        {
            precioDescuento=((Cantidad*35)*0.90);
            
        }
    else if(Cantidad=3)
        {
            precioDescuento=((Cantidad*35)*0.95);
            
        } 
   else
        {

        }
       
    if(precioDescuento>120)
    {
        precioDescuentoIIBB=(precioDescuento*1.10);
        alert("IIBB Usted pago " + precioDescuentoIIBB);
    }
    
     
    
    document.getElementById("precioDescuento").value=precioDescuento;
}

