// Obtener la lista de datos desde el localStorage
const listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];

// Seleccionar la tabla donde se mostrarán los datos
const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];

// Iterar sobre los datos y añadirlos a la tabla
listaDatos.forEach(function(datos) {
    const fila = tabla.insertRow();

    const celdaNombre = fila.insertCell(0);
    const celdaApellido = fila.insertCell(1);

    celdaNombre.textContent = datos.nombre;
    celdaApellido.textContent = datos.apellido;
});