function validarUsuario() {
  let user = localStorage.getItem("User");

  if (user == null || user == undefined) {
    user = prompt("Ingrese su Usuario por Primera Vez");
    const listaMascotas = document.querySelector("#pet-list");
    listaMascotas.innerHTML = "";

    localStorage.setItem("User", JSON.stringify(user));
  }

  const currentUser = document.querySelector("#current-user");
  currentUser.innerText = `El usuario actual es : ${user}`;
  return user;
}
function CargarMascotas() {
  const mascotasMemoria = JSON.parse(localStorage.getItem("Mascotas"));
  console.log(mascotasMemoria);

  if (mascotasMemoria == null || mascotasMemoria == undefined) {
    return [];
  } else {
    return mascotasMemoria;
  }
}

function guardarMascotas() {
  localStorage.setItem("Mascotas", JSON.stringify(mascotas));
}

function recargarMascotas() {
  const mascotasMemoria = Array.from(CargarMascotas());
  console.log(
    "funcion Recargar mascotas tiene estas mascotas en memoria: ",
    mascotasMemoria
  );
  const listaMascotas = document.querySelector("#pet-list");
  listaMascotas.innerHTML = "";
  mascotasMemoria.forEach((mascota) =>
    listaMascotas.append(crearCardMascota(mascota))
  );
}

function crearCardMascota(mascota) {
  console.log("funcion crearCardMascota llamada con argumento:", mascota);
  const nuevaCard = document.createElement("li");
  const idMascota = document.createElement("h2");
  const nombreMascota = document.createElement("h2");
  const tipoMascota = document.createElement("h2");

  idMascota.innerText = `Id Mascota: ${mascota.id}`;
  nombreMascota.innerText = `Nombre Mascota: ${mascota.nombre}`;
  tipoMascota.innerText = `Tipo Mascota: ${mascota.tipo}`;

  nuevaCard.append(idMascota);
  nuevaCard.appendChild(nombreMascota);
  nuevaCard.appendChild(tipoMascota);

  return nuevaCard;
}

mascotas = CargarMascotas();
userActual = validarUsuario();
console.log(userActual);

function crearMascota(nombre, tipo) {
  mascotas.push(new Mascota(nombre, tipo));
  console.log("ahora llamo a funcion recargarMascotas");
  guardarMascotas();
  recargarMascotas();
}

class Mascota {
  static id = 0;
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.dueño = userActual;
    this.id = ++Mascota.id;
  }
}

console.log(mascotas);

/* function crearMascota() {
  console.log("Se ha invocado la funcion crear mascota");
  const nombre = prompt("Ingrese el nombre de su mascota");
  const especie = prompt("Ingrese la especie de su mascota");
  let nuevaMascota = { nombre, especie };
  listaMascotas.push(nuevaMascota);
  listarMascotas();
}

function modificarMascota() {
  console.log("Se ha iniciado la funcion modificar mascota");
  let modificarUltimaMascota = confirm(
    "Desea modificar la siguiente mascota: " +
      listaMascotas[listaMascotas.length - 1].nombre
  );
  if (modificarUltimaMascota) {
    const nuevoNombre = prompt("Ingrese el nuevo nombre: ");
    const nuevaEspecie = prompt("Ingrese la nueva especie: ");
    listaMascotas[listaMascotas.length - 1].nombre = nuevoNombre;
    listaMascotas[listaMascotas.length - 1].especie = nuevaEspecie;
    listarMascotas();
  } else {
    alert("Operacion cancelada\nRegresando al menu principal");
  }
}

function eliminarMascota() {
  console.log("Se ha invocado la funcion eliminar mascota");
  alert(
    "Se eliminara la siguiente mascota: " +
      listaMascotas[listaMascotas.length - 1].nombre
  );
  let confirmaEliminacion = confirm("Desea eliminar este registro?");
  if (confirmaEliminacion) {
    listaMascotas.pop();
    listarMascotas();
  } else {
    alert("Operacion anulada\nRegresando al menu principal");
  }
}

function listarMascotas() {
  console.log("se ha invocado la funcion listar mascotas");
  if (listaMascotas.length == 0) {
    alert("No hay mascotas para listar,regresando al menu principal");
  } else {
    let nombreMascotas = [];
    for (mascota of listaMascotas) {
      nombreMascotas.push(mascota.nombre);
    }
    alert(
      `sus mascotas son: ` +
        nombreMascotas.join(" - ") +
        "\nRegresando al menu principal"
    );
  }
}
console.log("Inicia carga del programa");
let iniciarSimulador = confirm("Bienvenido al sistema de gestion de mascotas");
let listaMascotas = [];
alert(
  "A continuacion debe seleccionar una de las siguientes opciones: \n1)Crear Mascota-Presiona \n2)Modificar ultima Mascota ingresada\n3)Eliminar ultima Mascota creada\n4)Listar Mascotas\n5)Salir"
);

while (iniciarSimulador) {
  let seleccionUser = prompt(
    `Ingrese "1" para crear \nIngrese "2" para modificar\nIngrese "3" para Eliminar\nIngrese "4" para listar sus mascotas\nIngrese "5" para salir`
  );

  switch (seleccionUser) {
    case "1": {
      crearMascota();
      break;
    }
    case "2": {
      modificarMascota();
      break;
    }
    case "3": {
      eliminarMascota();
      break;
    }
    case "4": {
      listarMascotas();
      break;
    }
    case "5": {
      iniciarSimulador = false;
      break;
    }
    default: {
      alert("Debe seleccionar una opcion valida, regresando al menu principal");
    }
  }
}
console.log("Fin del programa");
alert("Fin del programa");
 */
