$(document).ready(function () {
  var $firstName = $('#first-name');
  var $lastName = $('#last-name');
  var $email = $('#email');
  // habilitar el botón-next
  $('#submit').attr('disabled', 'disabled');
  $('#check').click(function () {
    $('#submit').attr('disabled', false);
  });
  // validar que ingrese sólo letras
  $(':text#first-name').on('input', function () {
    if ($(this).val().match(/[1-9]/)) {
      alert('Ingrese sólo letras');
      $(this).val('');
    }
  });
  $(':text#last-name').on('input', function () {
    if ($(this).val().match(/[1-9]/)) {
      alert('Ingrese sólo letras');
      $(this).val('');
    }
  });
  //validar el email
  $email.on('input', function (event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      console.log($(this).val()); 
    } 
  });
   //redireccionar a la última vista --> inconvenientes por default
   $('#submit').click(function () {
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      window.location.href = '../views/ultimate.html';
    } else {
      alert('Verifique sus datos');
      event.preventDefault();
    }
  });
});