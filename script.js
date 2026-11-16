const desarrollador = {
  nombre: "Miguel",
  ciudad: "Trinidad",
  meta: "Ser desarrollador full stack",
  tecnologias: ["HTML", "CSS", "JavaScript"],
  estaEstudiando: true
};

console.log(desarrollador.nombre);
console.log(desarrollador["ciudad"]);
console.log(desarrollador.tecnologias[0]);
console.log(desarrollador.tecnologias.length);
console.log(desarrollador.estaEstudiando);

const edad = 20;

if (edad >= 18) {
  console.log("Puedes acceder al contenido");
} else {
  console.log("No puedes acceder al contenido");
}

const estaEstudiando = true;

if (estaEstudiando) {
  console.log("Miguel está aprendiendo desarrollo full stack");
} else {
  console.log("Miguel no está estudiando ahora");
}

const formulario = document.querySelector("form");
const mensajeConfirmacion = document.querySelector("#mensaje-confirmacion");
const mensajeError = document.querySelector("#mensaje-error");
const listaMensajes = document.querySelector("#lista-mensajes");
const buscarMensaje = document.querySelector("#buscar-mensaje");

const mensajesEnviados = [];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  if (mensaje.trim().length < 10) {
    mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
    mensajeConfirmacion.textContent = "";
    return;
  }

  const nuevoMensaje = {
    id: Date.now(),
    nombre,
    email,
    mensaje
  };

  mensajesEnviados.push(nuevoMensaje);

  mensajeError.textContent = "";
  mensajeConfirmacion.textContent = `Gracias, ${nombre}. Tu mensaje fue recibido.`;

  mostrarMensajes(mensajesEnviados);

  formulario.reset();
});

function mostrarMensajes(mensajes) {
  listaMensajes.innerHTML = "";

  mensajes.map((mensaje) => {
    const elemento = document.createElement("li");

    elemento.textContent = `${mensaje.nombre} (${mensaje.email}): ${mensaje.mensaje}`;

    listaMensajes.appendChild(elemento);
  });
}

function buscarMensajePorCorreo(email) {
  return mensajesEnviados.find((mensaje) => mensaje.email === email);
}

console.log(buscarMensajePorCorreo("tucorreo@ejemplo.com"));

