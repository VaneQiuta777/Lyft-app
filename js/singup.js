$(document).ready(function () {
  // seleccionar el país según código postal
  function flag(element) {
    var srcImgBanderas = $('#img-banderas').attr('src');
    var altImgBanderas = $('#img-banderas').attr('alt');
    var srcImgBanderasNew = $(element).attr('src');
    var altImgBanderasNew = $(element).attr('alt');
    $('#img-banderas').attr('src', srcImgBanderasNew);
    $('#img-banderas').attr('alt', altImgBanderasNew);
    $(element).attr('src', srcImgBanderas);
    $(element).attr('alt', altImgBanderas);
    if (altImgBanderasNew === 'Peru') {
      $('#postal').text('52');
    }
    if (altImgBanderasNew === 'Brasil') {
      $('#postal').text('51');
    }
    if (altImgBanderasNew === 'Colombia') {
      $('#postal').text('50');
    }
    if (altImgBanderasNew === 'Argentina') {
      $('#postal').text('49');
    }
  }
  $('#img-banderas1').click(function () {
    flag($(this));
  });
  $('#img-banderas2').click(function () {
    flag($(this));
  });
  $('#img-banderas3').click(function () {
    flag($(this));
  });
  $('#img-banderas4').click(function () {
    flag($(this));
  });
  // habilitar el botón-next
  $('#button-next').attr('disabled', true);
  $('#number-phone').keyup(function () {
    if (($(this).val().length) === 9) {
      $('#button-next').attr('disabled', false);
    }
    else {
      $('#button-next').attr('disabled', true);
    }
  });
  //validar el número móvil empiece con 9 --> pendiente
  
  // obtener el código LAB
  $('#button-next').click(function (e) {
    // var key = e.keyCode || e.which;
    // if (key === 13) {
    var labCode = Math.floor(1e2 + (Math.random() * 2e2));
    alert('Tu código es ' + ' LAB ' + labCode);
    // };
    event.preventDefault();
    localStorage.code = labCode;

    var lastname = localStorage.getItem(labCode);
    console.log(labCode)
    window.location.href = 'verify.html';
  });



});