const tareas = [
  { id: 16, descripcion: "Hacer Mercado", completado: false },
  { id: 60, descripcion: "Estudiar para la prueba", completado: false },
  { id: 24, descripcion: "Sacar a pasear a Tobby", completado: false },
];

const listaAgregados = document.querySelector(".agregados");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const totalT = document.getElementById("total");
const real = document.getElementById("realizadas");
const compa = document.querySelectorAll("input:checked");

renderTareas();
cantidadCompletados();

document.querySelectorAll("input[name=completado]").forEach((i) => {
  i.onclick = function () {
    cantidadCompletados();
  };
});
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

compa.forEach((y) => {
  y.addEventListener("change", () => {
    const x = this.id;
    cambiarCheck(x);
  });
});

function cambiarCheck(id) {
  const x = tareas.find((e) => e.id == id);
  if (tareas) {
    tareas.completado = !tareas.completado;
    renderTareas();
  }
}

function borrar(id) {
  const index = tareas.findIndex((elemento) => elemento.id == id);
  tareas.splice(index, 1);

  renderTareas();
}

function renderTareas() {
  let html = ``;
  let cont = 0;
  for (t of tareas) {
    cont += 1;
    html += `<li id="${t.id}"> ${t.id} ${t.descripcion}`;

    if (t.completado == false) {
      html += `<input  type="checkbox" onclick="cambiarCheck()" name="completado" /> <button onclick="borrar(${t.id})" class="close"><i class="fa-solid fa-x"></i></button> </li>`;
    } else {
      html += `<input  type="checkbox" onclick="cambiarCheck()" name="completado" checked= ${t.completado} /> <button  onclick="borrar(${t.id})" class="close"><i class="fa-solid fa-x"></i></button> </li>`;
    }
  }
  totalT.innerHTML = cont;
  listaAgregados.innerHTML = html;
  cantidadCompletados();
}

function cantidadCompletados() {
  document.getElementById("realizadas").textContent =
    document.querySelectorAll("input:checked").length;
  tareas.completado = true;

  document.querySelectorAll("input[name=completado]").forEach((i) => {
    i.onclick = function () {
      cantidadCompletados();
    };
  });
}
