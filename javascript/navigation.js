function closeHeader() {
  if ($(navmenu).hasClass("open")) {
    $('#nav-icon').removeClass('open');
    $('#overlay').removeClass('open');
    $('#logo').addClass('invert');
    $('.navcontent').addClass('delayingclose');
    $('.navcontent').addClass('hidden');
    $('.navcontent').removeClass('open');
    setTimeout(function () {
      $('.navcontent').removeClass('delayingclose');
      $('#navmenu').removeClass('open');
      $('.navcontent').removeClass('hidden');
    }, 200);
  }
}

function closeFooter() {
  $("footer").animate({ opacity: 0 }, 800);
}

// Home Page
function homePackup() {
  closeHeader();
  closeFooter();
  $(".blobcontainer").css({ opacity: 0 });
  for (let i = 1; i < 4; i++) {
    setTimeout(function () {
      $("#" + i).animate({
        opacity: 0
      }, 250)
    }, (i * 50) + 100);
  }
}

// About Page
function aboutPackup() {
  closeHeader();
  closeFooter();
  for (let i = 1; i < 4; i++) {
    setTimeout(function () {
      $("#" + i).animate({
        opacity: 0
      }, 550)
    }, (i * 50) + 100);
  }
}

$(document).ready(function () {
  $('#aboutbutton').click(function () {
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function () { window.location.href = "about.html"; }, 800);
    }

    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function () { window.location.href = "about.html"; }, 800);
    }
  })
  $('#homebutton').click(function () {
    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function () { window.location.href = "index.html" }, 800);
    }
  })
  $('#projectsbutton').click(function () {
    if ($('body').attr('id') == "about") {
      aboutPackup();
      setTimeout(function () { window.location.href = "projects.html" }, 800);
    }
    if ($('body').attr('id') == "home") {
      homePackup();
      setTimeout(function () { window.location.href = "projects.html"; }, 800);
    }
  })
})
