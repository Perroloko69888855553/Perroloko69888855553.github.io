//no functions yet...
    // Obtener el elemento del texto
    var tickingText = document.getElementById("ticking-text");

    // Configurar el intervalo para el efecto de "ticking"
    var interval = setInterval(function() {
        // Obtener el texto actual
        var currentText = tickingText.innerHTML;

        // Verificar si el último carácter es un punto
        if (currentText.slice(-1) === ".") {
            // Si es un punto, eliminarlo
            tickingText.innerHTML = currentText.slice(0, -1);
        } else {
            // Si no es un punto, añadirlo al final
            tickingText.innerHTML = currentText + ".";
        }
    }, 500); // Intervalo de 500 milisegundos (0.5 segundos)
