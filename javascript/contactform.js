$(document).ready(function(){
  $(".mailingbutton").on("click", function(){
    $('.mailingbutton').addClass('hidden');
    $('#mailingform').addClass('visible');
  });

  $('#gform').on('submit', function(e) {
    console.log($('#mailingform'))
    $('#mailingform').removeClass('visible');
    setTimeout(function(){
      $('.submissionresponse').addClass('visible');
      $('.emailinput').val('');

      setTimeout(function(){
        $('.submissionresponse').removeClass('visible');
        setTimeout(function(){
          $('.mailingbutton').removeClass('hidden');
        }, 300);
      }, 2000);
    }, 1000);
  });
});
