$(document).ready(function(){
  $('#gform').on('submit', function(e) {
    console.log($('#mailingform'))
    $('#mailingform').removeClass('visible');
  });
});
