function crearMascota() {
  let nombre = prompt("Ingrese el nombre de su mascota");
  let especie = prompt("Ingrese la especie de su mascota");
  let nuevaMascota = { nombre, especie };
  listaMascotas.push(nuevaMascota);
  listarMascotas();
}

function modificarMascota() {
  let modificarUltimaMascota = confirm(
    "Desea modificar la siguiente mascota: " +
      listaMascotas[listaMascotas.length - 1].nombre
  );
  if (modificarUltimaMascota) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre: ");
    let nuevaEspecie = prompt("Ingrese la nueva especie: ");
    listaMascotas[listaMascotas.length - 1].nombre = nuevoNombre;
    listaMascotas[listaMascotas.length - 1].especie = nuevaEspecie;
    listarMascotas();
  } else {
    alert("Operacion cancelada\nRegresando al menu principal");
  }
}

function eliminarMascota() {
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
  let mascotasListadasString = "";
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
alert("Fin del programa")
