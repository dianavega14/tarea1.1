let tareas = [
    { nombre: 'Guardar la ropa', completada: false },
    { nombre: 'Ir al supermercado', completada: false },
    { nombre: 'Hacer tarea', completada: false }
];

function agregarTarea(tarea, completada = false) {
    const nuevaTarea = { tarea, completada };
    tareas.push(nuevaTarea);
    console.log(`Se agregó: ${tarea}`);
}

function marcarTarea(Tarea) {
    const tareaMarcada = tareas.find(tarea => tarea.nombre === Tarea);
    if (tareaMarcada) {
        tareaMarcada.completada = true;
    } else {
        console.log("Esa tarea no se encuentra");
    }
}

function listarTareasCompletadas() {
    const tareasCompletadas = tareas.filter(tarea => tarea.completada === true);
    console.log("Tareas completadas: ");
    tareasCompletadas.forEach(tarea => {
        console.log(`${tarea.nombre}`);
    });
}

function listarTareasPendientes() {
    const tareasPendientes = tareas.filter(tarea => tarea.completada === false);
    console.log("Tareas pendientes: ");
    tareasPendientes.forEach(tarea => {
        console.log(`${tarea.nombre}`);
    });
}

agregarTarea("Limpiar");
agregarTarea("Alimentar a los gatos")
marcarTarea("Ir al supermercado");
marcarTarea("Hacer tarea");
listarTareasCompletadas();
listarTareasPendientes();