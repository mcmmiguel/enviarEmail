document.addEventListener('DOMContentLoaded', function () {

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //Funciones
    function validar (e) {
        console.log(e.target.parentElement);

        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        } 
        
        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        
        //Generar alerta en HTML
        const error = document.createElement('P'); //Creamos un Parrafo
        error.textContent = mensaje; // 
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center'); //Clases para estilos de texto en Tailwind

        //Inyectar el Error al Formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');//Busca en el div que seleccione si hay bg-red-600

        if(alerta) {
            alerta.remove();
        }
    }
    

})