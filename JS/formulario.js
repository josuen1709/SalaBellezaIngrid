function calcularEdad() {
    let fechaNacimiento = document.getElementById('fechaNacimiento');
    let edad = document.getElementById('edad');

    fechaNacimiento.addEventListener('input', () => {
        let fechaNac = new Date(fechaNacimiento.value);
        let fechaActual = new Date();
        let edadCalculada = fechaActual.getFullYear() - fechaNac.getFullYear();
        edad.value = edadCalculada;
    });
}
