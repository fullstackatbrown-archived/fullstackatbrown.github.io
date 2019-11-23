$(document).ready(function(){
  $(window).on("load", function() {
    $(".blobcontainer").css({opacity: 1});
    // for disabled loader
    // setTimeout(function(){
    //   $(".loader").fadeOut("slow");
    // }, 1000);
    for (let i = 1; i < 4; i++) {
      setTimeout(function(){
        $("#" + i).animate({
          opacity: 1
        }, 250)
      }, (i-1)*100);
    }
  });
});
