// MENU
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu_lista");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

         window.onscroll = ()=>{
             this.scrollY > 8 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
         }
// CIERRE MENU
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}

// FORMULARIO
$(document).ready(function() {

	// Bloquea el click derecho
	$(document).on('contextmenu', function(e) {
    e.preventDefault();
	});

	// Para bloquear ciertas teclas y combinaciones entre ellas
	$(document).on('keydown keyup', function(e) {
		// Bloq mayús, re pág, av pág, fin, inicio, f12
    if (e.keyCode == 20 || e.keyCode == 33 || e.keyCode == 34 || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 117 || e.keyCode == 123)
		e.preventDefault();
		// Ctrl + fin, ctrl + inicio
		if (e.ctrlKey && e.keyCode == 35 || e.ctrlKey && e.keyCode == 36)
		e.preventDefault();
		// Ctrl + a, ctrl + s, ctrl + u
		if (e.ctrlKey && e.keyCode == 65 || e.ctrlKey && e.keyCode == 83 || e.ctrlKey && e.keyCode == 85)
		e.preventDefault();
		// Ctrl + "+", ctrl + "-", ctrl + "+" del numpad, ctrl + "-" del numpad
		if (e.ctrlKey && e.keyCode == 107 || e.ctrlKey && e.keyCode == 109 || e.ctrlKey && e.keyCode == 187 || e.ctrlKey && e.keyCode == 189)
		e.preventDefault();
		// Ctrl + shift + c, ctrl + shift + e, ctrl + shift + i
		if (e.ctrlKey && e.shiftKey && e.keyCode == 67 || e.ctrlKey && e.shiftKey && e.keyCode == 69 || e.ctrlKey && e.shiftKey && e.keyCode == 73)
		e.preventDefault();
		// Ctrl + shift + j, Ctrl + shift + k
		if (e.ctrlKey && e.shiftKey && e.keyCode == 74 || e.ctrlKey && e.shiftKey && e.keyCode == 75)
		e.preventDefault();
	});

	// Bloquea ciertas teclas especiales como ñ+¿,shift,f1,f2 etc, para que no se puedena escribir en los input tipo text, email, num, tel y textarea 
	$('input[type="text"], input[type="email"], input[type="num"], input[type="tel"], textarea').on('keydown keyup', function(e) {
    
    // Validación para en caso de que los campos del formulario de contacto esten vacios no pueda teclear el espacio, el this es para cada uno
		if ($(this).val() === '') {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}   

		// Bloquea el shift
		if (e.shiftKey || e.keyCode == 93)
		e.preventDefault();
   // Bloquea de la tecla 17 hasta la 31, de la 33 hasta la 36 y de la 41 hasta la 46 
		if (e.keyCode > 16 && e.keyCode < 32 || e.keyCode > 32 && e.keyCode < 37 || e.keyCode > 40 && e.keyCode < 47)
		e.preventDefault();
		// Bloquea los caracteres acentuados y f1, f2 hasta f4 y el f6, f7, hasta antes de la coma "," y del pto "."
		else if (e.keyCode > 105 && e.keyCode < 113 || e.keyCode > 112 && e.keyCode < 188)
		e.preventDefault();
		// Bloquea los keycode desde 191 hasta 126
		else if (e.keyCode > 190 && e.keyCode < 227)
		e.preventDefault();
	});

	// Bloquea el pto "." para los inputs tipo text, num, tel.
	$('input[type="text"], input[type="num"], input[type="tel"]').on('keydown keyup', function(e) {
		if (e.keyCode == 188 || e.keyCode == 189 || e.keyCode == 190)
		e.preventDefault();
	});

	// Bloquea los números del teclado tanto los de arriba como les del numpad para los input tipo text
	$('input[type="text"]').on('keydown keyup', function(e) {
		if (e.keyCode > 47 && e.keyCode < 58 || e.keyCode > 95 && e.keyCode < 106)
		e.preventDefault();
	});

	// Bloquea las tecla coma "," para los inputs tipo email
	$('input[type="email"]').on('keydown keyup', function(e) {
		if (e.keyCode == 188)
		e.preventDefault();
	});

	// Bloquea todas las vocales para que no se pudan escribir en los input de tipo tel y num
	$('input[type="num"], input[type="tel"]').on('keydown keyup', function(e) {
		// Bloquea todas las letras del abecedario
		if (e.keyCode > 64 && e.keyCode < 91)
		e.preventDefault();
	});

	// Bloquea la tecla guion "-" para el textarea
	$('textarea').on('keydown keyup', function(e) {
		if (e.keyCode == 189)
		e.preventDefault();
	});

	$('.effect-input').on('focus', function() {
		// Validación para cuando hagan focus en un input se le agregue la clase active-input-form-contact a los hermanos del input osea el span class="bar" y el label
		$(this).siblings('.support-text-form-contact, .bar-input-effect').addClass('active-input-form-contact');
		// Validación para cuando esten llenando el formulario desaparezca el footer del mobil y el botón de ir arriba
	});

	// Validación para cuando hay más de 0 letras aparezca el icono de la X en la otra esquina del input
	$('.effect-input').on('keydown keyup', function() {
		// Se agregue la clase validate-input para que mediante por css se hace por cascada los estilos cuando este correcto o incorrecto
	  $(this).addClass('validate-input');
		if ($(this).val().length >= 1) {
			$(this).siblings('.bar-input-effect').children('.clear-input-icon').fadeIn();
		}
		else {
			$(this).siblings('.bar-input-effect').children('.clear-input-icon').fadeOut();
		}
	});

	// Validación para cuando hagan focus-out en los inputs y textarea del formulario de contacto
	$('.effect-input').on('focusout', function() {
	  // Se agregue la clase validate-input para que mediante por css se hace por cascada los estilos cuando este correcto o incorrecto
	  $(this).addClass('validate-input');
		if ($(this).val() === '') {
			// Validación para cuando hagan focus en un input se le remueva la clase active-input-form-contact a los hermanos del input osea el span class="bar" y el label
			$(this).siblings('.support-text-form-contact, .bar-input-effect').removeClass('active-input-form-contact');
		}
	});	

	// Validación cuando le dan click al icono de la X en el formulario de contacto vacía el input en el que esta
	$('.clear-input-icon').on('click', function() {
		$(this).fadeOut();
		$(this).parent('.bar-input-effect').siblings('.effect-input').val('');
	  $(this).parent('.bar-input-effect').siblings('.effect-input').focusout();
		$(this).parent('.bar-input-effect').siblings('.effect-input').removeClass('validate-input');
	});

  // Validación para cuando den click en el botón de limpiar se limpie todo el formulario
	$('#clear_contact_user_grupoamsi').on('click', function() {
		$(this).blur();
		// Cuando le dan click al botón de limpiar se esconde el icono de la x de cada input y textarea
		$('.clear-input-icon').fadeOut();
		// Cuando le dan click al botón de limpiar se remueve la clase validate-input 
		// Esto es para que se limpie todo hasta los bordes correctos o incorrectos aunque si vuelven y hacen focus vuelve a hacerse la validación
		$('.effect-input').removeClass('validate-input');
		// Validación para cuando le den click al botón de cancelar se le remueva la clase active-input-form-contact a los hermanos del input osea el span class="bar" y el label
		$('.effect-input').siblings('.support-text-form-contact, .bar-input-effect').removeClass('active-input-form-contact');
		// Cuando le dan click al botón de limpiar se vacía el texto que tienen los parrafos de error
		$('.error-input-form-contact').empty();
	});

	// Validación cuando le dan click al botón de enviar formulario de contacto le agruegue la clase shake a los mensajes de error 
	$('#send_contact_user_grupoamsi').on('submit click', function(e) {
		e.preventDefault();
		$('.error-input-form-contact').addClass('shake');
		
		// Validacion para cuando se termine la animación se remueva la clase shake y aspi puede ser infinito
		setTimeout(function() {
			if ($('.error-input-form-contact').hasClass('shake')) {
				$('.error-input-form-contact').removeClass('shake');
			}
		}, 1000);
	});

	// Validación del botón enviar del formulario de contacto
	$('#send_contact_user_grupoamsi').on('click', function() {
		// La variable expr es para validar el formulario que solo reciba estos caracteres
		let expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		let letras = 'áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
		
		// Variables para capturar el valor de los inputs y textarea del formulario de contacto
		let formContactNombres      = $('#contact_name_user_grupoamsi').val();
		let formContactCorreo       = $('#contact_email_user_grupoamsi').val();
		let formContactTelefono     = $('#contact_tel_user_grupoamsi').val();
		let formContactExtension    = $('#contact_ext_tel_user_grupoamsi').val();
		let formContactMensaje      = $('#contact_comments_user_grupoamsi').val();

		// Variables para capturar el id de cada errror de los campos del formulario de contacto
		let errorCampoNombres       = $('#field-names');
		let errorCampoCorreo        = $('#field-email');
		let errorCampoTelefono      = $('#field-tel');
		let errorCampoExtension     = $('#field-ext');
		let errorCampoMensaje       = $('#field-comments');

		// Variables nombre de los campos de error
		let campoNombres            = '* El campo nombres ';
		let campoCorreo             = '* El campo email ';
		let campoTelefono           = '* El campo teléfono ';
		let campoExtension          = '* El campo extensión ';
		let campoMensaje            = '* El campo mensaje ';

		// Variables de los mensajes de error
		let msnVacio                = 'esta vacío';
		let msnMinlength            = 'es demasiado corto';
		let msnMaxlength            = 'es demasiado largo';
		let msnMin                  = 'es menor que el adecuado';
		let msnMax                  = 'es mayor que el adecuado';
		let msnEmailInvalid         = 'debe ser un correo valido';
		let msnNumInvalid           = 'debe llevar números';
		let msnCaracteresEspeciales = 'deber ir sin caracteres espciales como ([{(°|!#$%&:;/()¡<>ñ)}])';
		let msnCampos               = [campoNombres, campoCorreo, campoTelefono, campoExtension, campoMensaje];

		// Validaciones para cuando el campo esta vacío o si es demasiado corto
		if (formContactNombres === '')
		errorCampoNombres.text(msnCampos[0].concat(msnVacio));

		else if (formContactNombres.length < 2)
		errorCampoNombres.text(msnCampos[0].concat(msnMinlength));

		if (formContactCorreo === '')
		errorCampoCorreo.text(msnCampos[1].concat(msnVacio));

		else if (formContactCorreo.length < 6)
		errorCampoCorreo.text(msnCampos[1].concat(msnMinlength));
		
		if (formContactTelefono.length < 7)
		errorCampoTelefono.text(msnCampos[2].concat(msnMinlength));

		if (formContactMensaje === '')
		errorCampoMensaje.text(msnCampos[4].concat(msnVacio));

		else if (formContactMensaje.length < 50)
		errorCampoMensaje.text(msnCampos[4].concat(msnMinlength));

		// Validación para cuando el número es demasiado corto
		if (formContactTelefono < 2000000)
		errorCampoTelefono.text(msnCampos[2].concat(msnMin));

		// Validaciones para cuando el campo es demasiado largo
		if (formContactNombres.length > 100)
		errorCampoNombres.text(msnCampos[0].concat(msnMaxlength));

		if (formContactCorreo.length > 92)
		errorCampoCorreo.text(msnCampos[1].concat(msnMaxlength));

		if (formContactTelefono.length > 11)
		errorCampoTelefono.text(msnCampos[2].concat(msnMaxlength));

		if (formContactExtension.length > 10)
		errorCampoExtension.text(msnCampos[3].concat(msnMaxlength));

		if (formContactMensaje.length > 400)
		errorCampoMensaje.text(msnCampos[4].concat(msnMaxlength));

		// Validación para cuando el número es demasiado largo
		if (formContactTelefono > 35000000000)
		errorCampoTelefono.text(msnCampos[2].concat(msnMax));

		if (formContactExtension > 9999999999)
		errorCampoExtension.text(msnCampos[3].concat(msnMax));

		// Validación para cuando no es un correo valido
		if (!expr.test(formContactCorreo))
		errorCampoCorreo.text(msnCampos[1].concat(msnEmailInvalid));

		// Validación para cuando no lleva números
		if(isNaN(formContactTelefono))
		errorCampoTelefono.text(msnCampos[2].concat(msnNumInvalid));

		if(isNaN(formContactExtension))
		errorCampoExtension.text(msnCampos[3].concat(msnNumInvalid));
	});
	
	// Validación para cunado le dan click a los botones al que le de click no se quede con el focus marcado
	$('button').on('click', function() {
		$(this).blur();
	});

});