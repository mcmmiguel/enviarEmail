document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        cc:'',
        asunto: '',
        mensaje: '',
    }
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputCC = document.querySelector('#cc');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputCC.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);
    
    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        //Reiniciar el objeto
       resetFormulario();
    })
    //Funciones
    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            //Reiniciar el objeto
            resetFormulario();
            
            //Crar una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center','rounded-lg','mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);
            
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }


    function validar (e) {

        if (e.target.value.trim() === '' && e.target.id !=='cc') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email [e.target.id] = '';
            comprobarEmail();
            return;
        } 
        
        if(e.target.id ==='cc' && !validarEmail(e.target.value) && e.target.value.trim() !== '') {
            mostrarAlerta(`El email no es válido`, e.target.parentElement);
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
        return resultado;
        
    }

    function comprobarEmail() {
        
         if(email['email'] === '' || email['asunto'] === '' || email['mensaje'] === '' || email['cc'] !== '' && !validarEmail(email['cc'])) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
         } 

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        //Reiniciar el objeto
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

})