(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.sidenav').sidenav();


// SWAP ICON ON CLICK
// Source: https://stackoverflow.com/a/34254979/751570
$('.dark-toggle').on('click',function(){
  if ($(this).find('i').text() == 'brightness_4'){
      $(this).find('i').text('brightness_high');
  } else {
      $(this).find('i').text('brightness_4');
  }
});
});

$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.tap-target').tapTarget();
});

$(document).ready(function(){
  $('.datepicker').datepicker();
});