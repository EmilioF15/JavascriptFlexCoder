let mascotas = [];
let userActual = {};

function validarUsuario() {
  const userForm = document.querySelector("#user-input");
  let user = localStorage.getItem("User");
  const currentUser = document.querySelector("#current-user");

  if (userForm.value === user) {
    currentUser.innerText = `El usuario actual es : ${user}`;
    recargarMascotas();
  } else {
    mascotas = [];
    userActual = {};
    Mascota.id = 0;
    localStorage.clear();
    localStorage.setItem("User", userForm.value);
    user = userForm.value;
    currentUser.innerText = `El usuario actual es : ${user}`;
    recargarMascotas();
  }
}
const botonIngresarUsuario = document.querySelector("#user-login-button");
botonIngresarUsuario.addEventListener("click", (e) => {
  const userForm = document.querySelector("#user-input");
  const petAddContainer = document.querySelector("#pet-add-container");
  const petListContainer = document.querySelector("#pet-list-container");
  const currentUser = document.querySelector("#current-user");
  e.preventDefault();
  currentUser.innerText = `El usuario actual es : ${userForm.value}`;

  petAddContainer.classList.toggle("disabled");
  petListContainer.classList.toggle("disabled");
  validarUsuario();
  document.querty;
});
const botonEliminarUsuario = document.querySelector("#close-session-button");
botonEliminarUsuario.addEventListener("click", () => {
  const petAddContainer = document.querySelector("#pet-add-container");
  const petListContainer = document.querySelector("#pet-list-container");

  mascotas = [];
  userActual = {};
  Mascota.id = 0;
  localStorage.clear();
  const currentUser = document.querySelector("#current-user");
  currentUser.innerText = "Por favor ingresar su usuario";
  const listaMascotas = document.querySelector("#pet-list");
  listaMascotas.innerHTML = "";
  document.querySelector("#user-input").value = "";
  petAddContainer.classList.toggle("disabled");
  petListContainer.classList.toggle("disabled");
});

function CargarMascotas() {
  const mascotasMemoria = JSON.parse(localStorage.getItem("Mascotas"));

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
  const listaMascotas = document.querySelector("#pet-list");
  listaMascotas.innerHTML = "";
  mascotasMemoria.forEach((mascota) =>
    listaMascotas.append(crearCardMascota(mascota))
  );
  const botonesEliminar = document.querySelectorAll(".remove-pet-button");
  botonesEliminar.forEach((el) =>
    el.addEventListener("click", (e) => {
      console.log(
        "llamo funcion eliminar con argumentos ",
        e.target.dataset.id
      );
      eliminarMascota(e.target.dataset.id);
    })
  );
}

function crearCardMascota(mascota) {
  const nuevaCard = document.createElement("li");
  const idMascota = document.createElement("h2");
  const nombreMascota = document.createElement("h2");
  const tipoMascota = document.createElement("h2");
  const botonEliminarMascota = document.createElement("button");

  botonEliminarMascota.innerText = "Eliminar Mascota";
  botonEliminarMascota.classList.add("remove-pet-button");
  botonEliminarMascota.dataset.id = mascota.id;

  idMascota.innerText = `Id Mascota: ${mascota.id}`;
  nombreMascota.innerText = `Nombre Mascota: ${mascota.nombre}`;
  tipoMascota.innerText = `Tipo Mascota: ${mascota.tipo}`;

  nuevaCard.appendChild(idMascota);
  nuevaCard.appendChild(nombreMascota);
  nuevaCard.appendChild(tipoMascota);
  nuevaCard.appendChild(botonEliminarMascota);

  return nuevaCard;
}

function eliminarMascota(id) {
  console.log(mascotas);
  const index = Array.from(mascotas).findIndex((mascota) => mascota.id == id);
  console.log("Se eliminar la mascota con el indice = ", index);

  if (index !== -1) {
    mascotas.splice(index, 1);
  }
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

function crearMascota() {
  const nombre = document.querySelector("#pet-name").value;
  const tipo = document.querySelector("#pet-type").value;
  console.log(nombre);
  console.log(tipo);
  mascotas.push(new Mascota(nombre, tipo));
  guardarMascotas();
  recargarMascotas();

  document.querySelector("#pet-name").value = "";
  document.querySelector("#pet-type").value = "";
}

const botonAgregarMascota = document.querySelector("#pet-save-button");
botonAgregarMascota.addEventListener("click", () => {
  crearMascota();
});

const botonLimpiarFormulario = document.querySelector("#pet-reset-form-button");
botonLimpiarFormulario.addEventListener("click", () => {
  document.querySelector("#pet-name").value = "";
  document.querySelector("#pet-type").value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  validarUsuario();
  recargarMascotas();
});
