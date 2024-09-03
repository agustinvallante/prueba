const formulario = document.getElementById('miFormulario');

        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;

            const datos = {
                nombre: nombre,
                apellido: apellido
            };

            let listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];

            listaDatos.push(datos);

            localStorage.setItem('listaDatos', JSON.stringify(listaDatos));

            alert('Datos guardados correctamente.');

            formulario.reset();
        });


