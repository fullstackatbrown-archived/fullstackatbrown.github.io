$(document).ready(function(){
  for (let i = 1; i < 4; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 1
      }, 850)
    }, (i-1)*100);
  }
});
