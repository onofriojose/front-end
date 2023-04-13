var numero1 = prompt ("ingrese el primer numero");
var numero2 = prompt ("Ingrese el segundo numero");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 > numero2) {
    alert (numero1 + " es mayor que " + numero2)
} else if  (numero1 === numero2) {
        alert ("son iguales")
}else
        alert (numero2 + (" es mayor"))