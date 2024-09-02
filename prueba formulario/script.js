const formulario = document.getElementById('miFormulario');

        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            // crear un objeto con los datos del formulario
            const datos = {
                nombre: nombre,
                email: email
            };

            // obtener los datos existentes en localStorage (si existen)
            let listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];

            // añadir los nuevos datos a la lista
            listaDatos.push(datos);

            // guardar la lista actualizada en localStorage
            localStorage.setItem('listaDatos', JSON.stringify(listaDatos));

            alert('Datos guardados correctamente.');

            // limpiar el formulario después de guardar
            formulario.reset();
        });
