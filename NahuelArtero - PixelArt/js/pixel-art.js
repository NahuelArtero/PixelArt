var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById('paleta');

function recorreColores() {// Crea grilla dinamica de colores.
  for (var x = 0; x < nombreColores.length; x++) {
    var paletaColores = document.createElement('div');
    paletaColores.className = 'paleta-colores';
    paletaColores.style.backgroundColor = nombreColores[x];
    paletaColores.style.borderRadius = '50%';
    paletaColores.style.padding = '4%';
    paleta.appendChild(paletaColores);
  }
}

var ultimoColor = ""; //Variable para definir el ultimo color elegido.

var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', function (e) {
  ultimoColor = colorPersonalizado.value;
  $('#indicador-de-color').css('background-color', ultimoColor);
});

var grillaPixeles = document.getElementById('grilla-pixeles');

function grillaColores() { //Crea la grilla de pixeles.
  for (var x = 0; x <= 1750; x++) {
    var pixel = document.createElement('div');
    pixel.className = 'pixel-colores';
    grillaPixeles.appendChild(pixel);
  }
}

$(document).on('click', '.paleta-colores', function () { // Muestra en el indicador de color cual es el ultimo color elegido para pintar.
  var $nvoColor = $(this).css('background-color');
  $('#indicador-de-color').css('background-color', $nvoColor);
  ultimoColor = $nvoColor;
});

$(document).on('click', '.pixel-colores', function () { // Pinta el pixel clickeado.
  $(this).css('background-color', ultimoColor);
});

$(document).on('click', '#borrar', function () { // Funcion para borrar lo pintado en la grilla de pixeles.
  $('.pixel-colores').animate({
    'background-color': 'white'
  }, 2000);
});

$('#grilla-pixeles').mouseleave(function () { //Funcion para que no permita seguir pintado luego de desplazado el puntero fuera de la grilla.
  pintar = false;
});

$(document).ready(function () { //Funcion para pintar de corrido al mantener presionado el boton del mouse.
  $(document).on('mousedown', '.pixel-colores', function () {
    pintar = true;

  }).on('mouseup', '.pixel-colores', function () {
    pintar = false;

  }).on('dragleave', '.pixel-colores', function () {
    pintar = false;

  }).on('mousemove', '.pixel-colores', function () {
    if (pintar != true) return;
    $(this).css('background-color', ultimoColor);
  });
});
//Funciones para cargar imagenes de superheroe a la grilla.
$('#invisible').click(function () {
  cargarSuperheroe(invisible);
});
$('#flash').click(function () {
  cargarSuperheroe(flash);
});
$('#wonder').click(function () {
  cargarSuperheroe(wonder);
});
$('#batman').click(function () {
  cargarSuperheroe(batman);
});
$('#guardar').click(function () {
  guardarPixelArt();
});

window.onload = function () {
  recorreColores();
  grillaColores();
}