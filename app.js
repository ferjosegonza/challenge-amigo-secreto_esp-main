let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (!nuevoAmigo) {
        alert("Por favor, ingrese un nombre.");
    } else {
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(nuevoAmigo);

        // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';

        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';

        amigos.forEach(amigo => {
            let listItem = document.createElement('li');
            listItem.textContent = amigo;
            listaAmigos.appendChild(listItem);
        });
    }
}

function sortearAmigo() {

    // Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    let sorteoAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let amigoSorteado = amigos[sorteoAleatorio];

    // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
