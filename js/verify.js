$(document).ready(function () {
  $('#cod-postal').text('+' + localStorage.code);
  var cont = false;
  var labCode;
  // funcion que crea un numero aleatorio
  labCode = function () {
    var labCode = Math.floor(1e2 + (Math.random() * 2e2));
    return labCode;
  };
  // habilitar el botón-next
  $('#button-reset').attr('disabled', true);
  $('#cod1').keyup(function () {
    if ($(this).val() === localStorage.code) {
      $('#button-next-verify').attr('disabled', false);
    }
    else {
      $('#button-next-verify').attr('disabled', true);
    }
  });
  // el boton redirecciona a la vista form
  $('#button-next-verify').click(function () {
    window.location.href = 'form.html';
  });
});