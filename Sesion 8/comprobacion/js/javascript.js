//Menu con opciones
//declarar variables
var opcion, num1, num2, resultado;
do {

opcion = prompt("Seleccione que desea hacer: \n" +
    "1.- Calcular cual número es mayor\n" +
    "2.- Sumar\n" +
    "3.- Restar\n" +
    "4.- Multiplicar\n" +
    "5.- Dividir\n" +
    "6.- Mostar los números ingresados\n" +
    "7.- Salir");

//Si el usuario ingresa cualquier opción entre 1 y 6 le solicitará que agregue dos números:
    if (opcion >= 8) { //en caso de seleccionar un numero que no este en el menu aparacera el siguiente mensaje
        alert("Opción no válida. Por favor ingrese un número del 1 al 7.")
    }
    else if (opcion != 7 && opcion >= 1) {
        num1 = parseInt(prompt("Ingrese el primer número"))
        num2 = parseInt(prompt("Ingrese el segundo número"))
    }

    // evaluar opcion para definir que hacer o a flujo ir
    // switch case key es lo que se evalua, value es el valor contra el que evaluamos
    switch (opcion) {
        case "1": //Calcular cual número es mayor
            mayor(num1, num2); // mayor(parametros, parametros)
            break;
        case "2":
            sumar(num1, num2);
            break;
        case "3":
            restar(num1, num2);
            break;
        case "4":
            multiplicar(num1, num2);
            break;
        case "5":
            dividir(num1, num2);
            break;
        case "6":
            mostrar(num1, num2)
            break;
        case "7":
            alert("hasta luego")
            break;
    }
    
} while (opcion != "7");
//funciones log("parametros"), parseInt("1"), alert("parametros")
// function nombre(parametros) {

// }

// funcion para evaluar cual numero es mayor
function mayor(numero1, numero2) {
        if (numero1 > numero2) { //si la condicion se cumple, numero1 es mayor a numero2
            alert(numero1 + " es mayor que " + numero2)
        } else if (numero1 === numero2) {// si no, es estrictamente igual?, con ===
            alert("Los números son iguales")
        } else { //no sucede lo anterior?, se ejecuta las reglas del else
            alert(numero2 + " es mayor que " + numero1)
        }
    }
function sumar(numero1, numero2) {
    resultado = num1 + num2
    alert("El resultado es " + resultado)
}

function restar(numero1, numero2) {
    resultado = num1 - num2
    alert("El resultado es " + resultado)
}
function multiplicar(numero1, numero2) {
    resultado = num1 * num2
    alert("El resultado es " + resultado)
}
function dividir(numero1, numero2) {
    do {
        alert("no se puede dividir entre 0")
        numero2 = parseInt(prompt("Ingrese el segundo número"))
    } while (numero2 = 0);
    resultado = numero1 / numero2
    alert("El resultado es " + resultado)
}
function mostrar(numero1, numero2) {
    alert("Los numeros ingresados son " + numero1 + " y " + numero2)
}
