async function obtenerUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const respuesta = await fetch(url);
        const usuarios = await respuesta.json();
        console.log(usuarios);
        for (let i = 0; i < usuarios.length; i++) {
            console.log(`Nombre: ${usuarios[i].name}, Email: ${usuarios[i].email}`);
        }

    } catch (error) {
        console.error("Ocurrió un error", error);
    }
}

obtenerUsuarios()