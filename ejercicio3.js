function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100);
            console.log(`Número: ${numero}`);
            if (numero % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta")
            }
        }, 3000);
    });
}

async function ejecutarConsulta() {
    try {
        const respuesta = await consultarBaseDeDatos();
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
ejecutarConsulta()