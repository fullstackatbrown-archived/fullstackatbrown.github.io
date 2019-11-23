function closeHeader() {
  if ($(navmenu).hasClass("open")) {
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
  }
}

// Home Page
function homePackup() {
  closeHeader();
  $(".blobcontainer").css({opacity: 0});
  for (let i = 1; i < 4; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 0
      }, 250)
    }, (i*50)+100);
  }
}

// About Page
function aboutPackup() {
  closeHeader();
  for (let i = 1; i < 4; i++) {
    setTimeout(function(){
      $("#" + i).animate({
        opacity: 0
      }, 550)
    }, (i*50)+100);
  }
}


$(document).ready(function(){
  $('#aboutbutton').click(function(){
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function(){window.location.href="about.html";}, 800);
    }
  })
})

$(document).ready(function(){
    $('#homebutton').click(function(){
      if ($('body').attr('id') == "about") {
        console.log("WIW")
        aboutPackup();
        setTimeout(function(){window.location.href="index.html"}, 800);
      }
    })
})
