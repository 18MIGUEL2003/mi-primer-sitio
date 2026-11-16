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

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  console.log("Nombre:", nombre);
  console.log("Correo:", email);
  console.log("Mensaje:", mensaje);

  mensajeConfirmacion.textContent = `Gracias, ${nombre}. Tu mensaje fue recibido.`;

  formulario.reset();
});

