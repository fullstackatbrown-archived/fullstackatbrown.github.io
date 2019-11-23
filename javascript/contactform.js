$(document).ready(function(){

  $('#gform').on('submit', function(e) {
    console.log($('#mailingform'))
    $('#mailingform').removeClass('visible');
    setTimeout(function(){
      $('.submissionresponse').addClass('visible');
      $('.emailinput').val('');

      setTimeout(function(){
        $('.submissionresponse').removeClass('visible');
        $('#mailingbutton').removeClass('hidden');
      }, 2000);
    }, 1000);
  });
});
