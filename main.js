function crearMascota() {
  let nombre = prompt("Ingrese el nombre de su mascota");
  let especie = prompt("Ingrese la especia de su mascota");
  let nuevaMascota = { nombre, especie };
  listaMascotas.push(nuevaMascota);
}

let iniciarSimulador = confirm("Bienvenido al sistema de gestion de mascotas");

while (iniciarSimulador) {
  alert(
    "A continuacion debe seleccionar una de las siguientes opciones: \n1)Crear Mascota-Presiona \n2)Modificar Mascota\n3)Eliminar Mascota\n4)Listar Mascotas\n5)Salir"
  );
  let opcion = prompt(
    `Ingrese "1" para crear \nIngrese "2" para modificar\nIngrese "3" para Eliminar\nIngrese "4" para listar sus mascotas\nIngrese "5" para salir`
  );
  switch (opcion) {
    case "1": {
      crearMascota();
      break;
    }
    case "2": {
    }
    case "3": {
    }
    case "4":{

    }
    case "5":{
        iniciarSimulador =false;
        break
    }
  }
}

let listaMascotas = [];
