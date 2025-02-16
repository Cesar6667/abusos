document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-reporte");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (validar()) {
            mostrarMensajeConfirmacion(); 
            formulario.reset(); 
        }
    });
});

function validar() {
    var dui, tipoAbuso, descripcion, evidencia;

    dui = document.getElementById("dui").value;
    tipoAbuso = document.getElementById("tipo-abuso").value;
    descripcion = document.getElementById("descripcion").value;
    evidencia = document.getElementById("evidencia").files;

    if (dui !== "" && (dui.length !== 9 || isNaN(dui))) {
        alert("El DUI debe tener 9 dígitos numéricos.");
        return false;
    }

    if (tipoAbuso === "") {
        alert("Por favor, selecciona el tipo de abuso.");
        return false;
    }

    if (descripcion === "") {
        alert("La descripción del abuso es obligatoria.");
        return false;
    }
    else if (descripcion.length > 500) {
        alert("La descripción es muy larga (máximo 500 caracteres).");
        return false;
    }

    if (evidencia.length > 0) {
        for (var i = 0; i < evidencia.length; i++) {
            var archivo = evidencia[i];
            var tipoArchivo = archivo.type;
            if (!tipoArchivo.match(/image\/*|application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document/)) {
                alert("Solo se permiten imágenes, PDF o documentos de Word.");
                return false;
            }
        }
    }

    return true; 
}

function mostrarMensajeConfirmacion() {
    var mensaje = document.getElementById("mensaje-confirmacion");
    mensaje.style.display = "block"; 

    var formulario = document.querySelector(".form-register");
    formulario.style.display = "none";
}