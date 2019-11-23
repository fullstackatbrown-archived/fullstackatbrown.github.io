$(document).ready(function(){
  // Home page
  if ($('body').attr('id') == "home") {
    $(".blobcontainer").css({opacity: 1});
    for (let i = 1; i < 4; i++) {
      setTimeout(function(){
        $("#" + i).animate({
          opacity: 1
        }, 800)
      }, (i-1)*40);
    }
  }

  // About page
  if ($('body').attr('id') == "about") {
    for (let i = 1; i < 4; i++) {
      setTimeout(function(){
        $("#" + i).animate({
          opacity: 1
        }, 850)
      }, (i-1)*100);
    }
  }

  // Animate footer
  $("footer").animate({
    opacity: 1
  }, 1000)
});
