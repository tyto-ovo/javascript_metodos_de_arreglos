const tareas = [
  { id: 16, descripcion: "Hacer Mercado", completado: false },
  { id: 60, descripcion: "Estudiar para la prueba", completado: false },
  { id: 24, descripcion: "Sacar a pasear a Tobby", completado: false },
];

const listaAgregados = document.querySelector(".agregados");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");

btnAgregar.addEventListener("click", () => {
  nuevaTarea = {
    id: Date.now(),
    descripcion: tareaInput.value,
    completado: false,
  };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((elemento) => elemento.id == id);
  tareas.splice(index, 1);

  renderTareas();
}
function renderTareas() {
  let html = ``;
  for (t of tareas) {
    html += `<li> ${t.id} ${t.descripcion} `;

    if (t.completado == false) {
      html += `<input  type="checkbox" class="completado" /> <button onclick="borrar(${t.id})" class="close"><i class="fa-solid fa-x"></i></button> </li>`;
    } else {
      html += `<input  type="checkbox" class="completado" checked /> <button  onclick="borrar(${t.id})" class="close"><i class="fa-solid fa-x"></i></button> </li>`;
    }
  }

  listaAgregados.innerHTML = html;
}
