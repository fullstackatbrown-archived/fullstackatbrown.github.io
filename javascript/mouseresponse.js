$(document).ready(function(){
  $("body").mousemove(function(e) {
    console.log("HEY")
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
