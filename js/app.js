    document.addEventListener('DOMContentLoaded', function() {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.forEach(anadirTareasLista)

        document.getElementById('formulario')
        this.addEventListener('submit', function(event) {
            event.preventDefault();
            const tareaIngresada = document.getElementById('nuevaTarea');
        const textoTarea = tareaIngresada.value;

        if(textoTarea === ''){
            alert('Porfavor Ingrese un valor')
            return;
        }

        anadirTareaaLista(textoTarea);
        anadirTareaenAlmacenamiento(textoTarea);

        tareaIngresada.value = ' ';
    });
});

function anadirTareaaLista(textoTarea) {
    const listaTarea = document.getElementById('listaTarea');
    const lista = document.createElement('lista');
    lista.textContent = textoTarea;

    const botonEliminar = document.getElementById('botonEliminar');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        eliminarTareadeAlmacenamiento(textoTarea); 
    });

    lista.appendChild(botonEliminar);
    listaTarea.appendChild(lista);

    lista.addEventListener('click', function() {
        lista.classList.toggle('completed');
    })

    function anadirTareaenAlmacenamiento() {
        const Tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        Tareas.push(textoTarea);
        localStorage.setItem('tareas', JSON.stringify(Tareas));
    }

    function eliminarTareadeAlmacenamiento(textoTarea) {
        let Tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        Tareas = Tareas.filter(Tarea => Tarea !== textoTarea);
        localStorage.setItem('tareas', JSON.stringify(Tareas));
    }

}

