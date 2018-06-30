var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var conocidoInput = document.getElementById("conocido");
var numeroInput = document.getElementById("numero");
var observaInput = document.getElementById("observa");
var submitButton = document.getElementById("enviar");
var otros = document.getElementById("otros");

function muestra_otros() {
  if (conocidoInput.value === "Ot"){
    otros.style.display = "block";
    otros.focus();
  }
  else if (conocidoInput.value !== "Otros"){
    otros.style.display = "none";
}
}

form.addEventListener("submit", function(event) {

  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  if (apellidosInput.checkValidity() === false) {
    alert("Tienes que escribir tus apellidos");
    apellidosInput.focus();
    event.preventDefault();
    return false;
  }

  var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  if(conocidoInput.checkValidity() ===false){
    alert("Tienes que seleccionar un valor");
    conocidoInput.focus();
    event.preventDefault();
    return false;
  }

  var regex1=/^([0-9]+){9}$/;
  var numeroValidation1 = regex1.test(numeroInput.value);

  if (numeroValidation1 === false){
    alert("Tienes que escribir un numero correcto");
    numeroInput.focus();
    event.preventDefault();
    return false;
  }  

var observaPalabrasUno = observaInput.value.split("\n").join(" ");
var observaPalabras = observaPalabrasUno.split(" ");
var observaPalabrasClean = observaPalabras.filter(Boolean);
var numeroPalabras = observaPalabrasClean.length;


  if (numeroPalabras > 150) {
    alert("El numero de palabras no puede ser superior a 150");
    observaInput.focus();
    event.preventDefault();
    return false;
  }
  

  submitButton.setAttribute("disabled", "");
  event.preventDefault();

  
  setTimeout(function() {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por contactar");
    submitButton.removeAttribute("disabled");
  }, 1000);
});
