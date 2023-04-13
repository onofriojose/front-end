// Primero creo la clase que utilizare para crear objetos
class Cliente {
  constructor(nombre, rut, clave, saldo) {
    this.nombre = nombre;
    this.rut = rut;
    this.clave = clave;
    this.saldo = saldo;
  }
}
//Aqui utilizaré constantes para guardar los clientes que voy a consultar
const cliente1 = new Cliente("Onofrio Mora","251014132","password1",36325000);
const cliente2 = new Cliente("James Will", "255634136", "password2", 350000);
const cliente3 = new Cliente("Carlos Jules", "14501413k", "password3", 635000);
const cliente4 = new Cliente("Yimmy Yimmy", "241214130", "password4", 352000);
//lista de clientes para recorrer
var listaClientes = [cliente1, cliente2, cliente3, cliente4];
//Solicitar ingreso de datos a validar
alert("Bienvenido al Banco EduTecno");
var validar = false;
var i = 0;
do {
  var rutCliente = prompt("Ingrese su rut sin puntos ni guion, \n" + "Ejemplo: 25000000K");
  var claveCliente = prompt("Ingrese clave");
  //Agregar ciclo y condicion para validar los datos ingresados
  for (let index = 0; index < listaClientes.length; index++)
    if (
      listaClientes[index].rut == rutCliente && listaClientes[index].clave == claveCliente) {
      alert("Bienvenido " + listaClientes[index].nombre);
      i = index;
      validar = true;
      menu();
      break;
    }
  if (validar == false) {
    alert("Usuario no encontrado");
  }
} while (validar == false);
//funcion del menu
function menu() {
  let opcion = "";
  do {
    let movimiento = 0; //variable para el saldo a retirar o depositar. la declaro aqui para que vuelva a cero antes de seleccionar otra opcion y se puedan cumplir las condiciones.
    opcion = prompt( "Seleccione que desea hacer\n" +
        "1.- Ver saldo\n" +
        "2.- Realizar giro\n" +
        "3.- Realizar deposito\n" +
        "4.- Salir");
    switch (opcion) {
      case "1":
        alert("Su saldo disponible es " + listaClientes[i].saldo);
        break;
      case "2":
        do {
            movimiento = parseInt(prompt("Saldo actual: " + listaClientes[i].saldo + " \n" +
            "Ingrese monto a retirar"));
            if (movimiento > listaClientes[i].saldo) {
            alert("Monto a retrirar supera saldo disponible");
          }
        } while (movimiento > listaClientes[i].saldo);
        listaClientes[i].saldo = listaClientes[i].saldo - movimiento;
        alert("Su saldo restante es " + listaClientes[i].saldo);
        break;
      case "3":
        do {
            movimiento = parseInt(prompt("Saldo actual: " + listaClientes[i].saldo + " \n" +
            "Ingrese monto a depositar"));
            if (movimiento <= 0) { //en caso de que el cliente trate de ingresar valores negativos
            alert("Ingresar un monto valido");
          }
        } while (movimiento <= 0);
        listaClientes[i].saldo = listaClientes[i].saldo + movimiento;
        alert("Su saldo actual es " + listaClientes[i].saldo);
        break;
    }
  } while (opcion != "4"); //el menu se va a repetir mientras no seleccion una de las opciones validas. 
}
