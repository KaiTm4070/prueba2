
const boton = document.getElementById('miBoton');


function cambiarPosicion() {
    // Generar posiciones aleatorias dentro del rango de la pantalla
    const nuevoTop = Math.random() * (window.innerHeight - boton.clientHeight);
    const nuevoLeft = Math.random() * (window.innerWidth - boton.clientWidth);

    // Aplicar la nueva posición al estilo del botón
    boton.style.top = nuevoTop + 'px';
    boton.style.left = nuevoLeft + 'px';
}

boton.addEventListener('click', cambiarPosicion);
