$(document).ready(function(){
  // Goo JQuery animation
  var radius = 8;
  let origins = ['440px 600px', '540px 310px', '430px 180px', '330px 445px', '134px 400px'];
  $(".blob").each(function(index) {
    $(this).css({'transform-origin': origins[index]});
    $(this).css({'animation': 'circle 4s linear infinite'});
  });

  // Parallaxing animations
  $("body").mousemove(function(e) {
    parallaxIt(e, "#goosvg", -20);
    parallaxIt(e, "#planet1", -10);
  });
  function parallaxIt(e, target, movement) {
    var $this = $("#planet1");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
});
