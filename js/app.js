document.addEventListener('DOMContentLoaded', function () {

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //Funciones
    function validar (e) {
        if (e.target.value.trim() === '') {
            console.log('Vacio');
            
        } else {
            console.log('Hay algo');
        }
        
    }
    

})