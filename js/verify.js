$(document).ready(function () {
  $('#cod-postal').text('+' + localStorage.code);
  // variables para validar si los digitos son iguales
  var cont = false;
  var labCode;
  // funcion que crea un numero random si es que se presiona el boton resent code
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
  // funcion para habilitar el boton
  // function enable() {
  //   $('#button-next-verify').removeAttr('disabled');
  //   $('#button-next-verify').removeClass('disabled-color');
  //   $('#button-next-verify').addClass('enabled-color');
  // }

  // $('#button-reset').click(function () {
  //   cont = false;
  //   $('#cod1').val('');
  //   disable();
  //   var labCode = labCode();
  //   alert('LAB - ' + numberResent);
  //   // se separa por digitos
  //   var num1 = (parseInt(numberResent / 100)).toString();
  //   $('#cod1').keyup(function () {
  //     if ($(this).val() === num1) {
  //       cont = true;
  //     } else {
  //       cont = false;
  //     }

  //     if (cont === true && cont1 === true && cont2 === true) {
  //       enable();
  //     } else {
  //       disable();
  //     }
  //   });

  //   $('#cod2').keyup(function () {
  //     if ($(this).val() === num2) {
  //       cont1 = true;
  //     } else {
  //       cont1 = false;
  //     }

  //     if (cont === true && cont1 === true && cont2 === true) {
  //       enable();
  //     } else {
  //       disable();
  //     }
  //   });

  //   $('#cod3').keyup(function () {
  //     if ($(this).val() === num3) {
  //       cont2 = true;
  //     } else {
  //       cont2 = false;
  //     }

  //     if (cont === true && cont1 === true && cont2 === true) {
  //       enable();
  //     } else {
  //       disable();
  //     }
  //   });
  // });

  // $('#cod1').keyup(function () {
  //   if ($(this).val() === localStorage.numRam) {
  //     cont = true;
  //   } else {
  //     cont = false;
  //   }

  //   if (cont === true && cont1 === true && cont2 === true) {
  //     enable();
  //   } else {
  //     disable();
  //   }
  // });

  // $('#cod2').keyup(function () {
  //   if ($(this).val() === localStorage.numRam1) {
  //     cont1 = true;
  //   } else {
  //     cont1 = false;
  //   }

  //   if (cont === true && cont1 === true && cont2 === true) {
  //     enable();
  //   } else {
  //     disable();
  //   }
  // });

  // $('#cod3').keyup(function () {
  //   if ($(this).val() === localStorage.numRam2) {
  //     cont2 = true;
  //   } else {
  //     cont2 = false;
  //   }

  //   if (cont === true && cont1 === true && cont2 === true) {
  //     enable();
  //   } else {
  //     disable();
  //   }
  // });
  // el boton redirecciona a la vista form
  $('#button-next-verify').click(function () {
    window.location.href = '../views/form.html';
  });
});