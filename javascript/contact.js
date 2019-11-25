$(document).ready(function(){
  $(".landingimagecontainer").mousemove(function(e) {
    parallaxIt(e, "#cactus", -6);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("#cactus");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

  $('#gform').on('submit', function(e) {
    $("#4")
      .css({'pointer-events': 'none'})
      .animate({opacity: 0}, 500)
    setTimeout(function(){
      $('.submissionresponse').addClass('visible');
      $('.input').val('');
      setTimeout(function(){
        $('.submissionresponse').removeClass('visible');
        $("#4")
          .css({'pointer-events': 'auto'})
          .animate({opacity: 1}, 1000)
      }, 800);
    }, 800);


  })
});
