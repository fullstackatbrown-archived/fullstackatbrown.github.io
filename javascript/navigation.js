$(document).ready(function(){
  $('#about').click(function(){
    $('#nav-icon').toggleClass('open');
    $('#overlay').toggleClass('open');
    $('#logo').toggleClass('invert');
    $('.navcontent').addClass('delayingclose');
    $('.navcontent').addClass('hidden');
    $('.navcontent').removeClass('open');
    setTimeout(function(){
      $('.navcontent').removeClass('delayingclose');
      $('#navmenu').removeClass('open');
      $('.navcontent').removeClass('hidden');
    }, 200);
    $(".blobcontainer").css({opacity: 0});
    for (let i = 1; i < 4; i++) {
      setTimeout(function(){
        $("#" + i).animate({
          opacity: 0
        }, 250)
      }, (i*50)+100);
    }
    setTimeout(function(){window.location.href="about.html";}, 1000);
  })
})
