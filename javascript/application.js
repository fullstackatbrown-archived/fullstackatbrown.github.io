$(document).ready(function(){
  $(".mailingbutton").on("click", function(){
    $('.mailingbutton').addClass('hidden');
    $('#mailingform').addClass('visible');
  });

  console.log("WOW")


  $('#gform').on('submit', function(e) {
    if (!submitted) {
      submitted = true;
      $('.landingtextcontainer').animate({
        opacity: 0
      }, 850, function(){
        $('.landingtextcontainer').hide()
        $(".landingcontainer").append(`
          <div id="confirmation" class="center">
            <sub>
              Thank you for your application,<br> we will follow up with you soon!
            </sub>
            <div class="editbutton" id="editbutton">
              Edit Application
            </div>
          </div>
        `);
        $('#editbutton').click(function() {
          console.log("WOW")
          $('#confirmation').animate({
            opacity: 0
          }, 850, function(){
            $('#confirmation').remove()
            $('.landingtextcontainer').show()
            $('.landingtextcontainer').animate({
              opacity: 1
            }, 850)
          })
          submitted = false;
        })
      })
    }
  });
});
