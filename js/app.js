document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }

    

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    //Asignar eventos
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    //Funciones
    function validar (e) {
        // console.log(e.target.parentElement);

        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email [e.target.id] = '';
            comprobarEmail();
            return;
        } 
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es válido`, e.target.parentElement);
            email [e.target.id] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);
        //Asiganr valores al obejto de Email
        email [e.target.id] = e.target.value.trim().toLowerCase();
        console.log(email);

        //Comprobar el objeto de email
        comprobarEmail();
        
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
    
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // Expresión regular para buscar un patron
        const resultado = regex.test(email)
        console.log(resultado);
        return resultado;
        
    }

    function comprobarEmail() {
        console.log(email);
        
         if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
         } 

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
         
        
    }

})