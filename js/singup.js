$(document).ready(function () {
  // funcion para que cambie la bandera seleccionada y el codigo postal
  function bandera(element) {
    var srcImgBanderas = $('#img-banderas').attr('src');
    var altImgBanderas = $('#img-banderas').attr('alt');
    var thisSrcImgBanderas = $(element).attr('src');
    var thisAltImgBanderas = $(element).attr('alt');
    $('#img-banderas').attr('src', thisSrcImgBanderas);
    $('#img-banderas').attr('alt', thisAltImgBanderas);
    $(element).attr('src', srcImgBanderas);
    $(element).attr('alt', altImgBanderas);
    if (thisAltImgBanderas === 'Peru') {
      $('#postal').text('52');
      localStorage.codPostal = '52';
    }
    if (thisAltImgBanderas === 'Brasil') {
      $('#postal').text('51');
      localStorage.codPostal = '51';
    }
    if (thisAltImgBanderas === 'Colombia') {
      $('#postal').text('50');
      localStorage.codPostal = '50';
    }
    if (thisAltImgBanderas === 'Argentina') {
      $('#postal').text('49');
      localStorage.codPostal = '49';
    }
  }

  $('#img-banderas1').click(function () {
    bandera($(this));
  });

  $('#img-banderas2').click(function () {
    bandera($(this));
  });

  $('#img-banderas3').click(function () {
    bandera($(this));
  });
//deshabilitar y habilitar el botón.
if((#button-next) === 
