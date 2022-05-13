//JS Web BArbosa

//----Header cambia cuando el scroll baja
/*$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.navbar-custom').addClass("scroll-style");
  } else {
    $('.navbar-custom').removeClass("scroll-style");
  }
});*/


//Buscador

$('#buscador-c').on('click', function () {
  $('#buscador-c').addClass('hide');
  $('#buscador-noticias').addClass('show').delay(1000);
});

$('#cerrar-buscador').on('click', function () {
  $('#buscador-c').removeClass('hide');
  $('#buscador-noticias').removeClass('show');
});

//Buscador Wordpress

$('.btn-open-buscador').on('click', function () {
  $('.search-field').addClass('show');
  $('.search-submit').addClass('show');
  $('.btn-close-buscador').addClass('show');
  $('.btn-open-buscador').addClass('hide');
});

$('.btn-close-buscador').on('click', function () {
  $('.search-field').removeClass('show');
  $('.search-submit').removeClass('show');
  $('.btn-close-buscador').removeClass('show');
  $('.btn-open-buscador').removeClass('hide');
});