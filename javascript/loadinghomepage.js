$(document).ready(function(){
  $(".blobcontainer").css({opacity: 1});
  for (let i = 1; i < 4; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 1
      }, 800)
    }, (i-1)*40);
  }
});
