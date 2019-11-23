$(document).ready(function(){
  // prevents multiple successive clicks
  let ready = true;
	$('#nav-icon').click(function(){
    if (ready) {
      // reset ready status on timer
      ready = false;
      setTimeout(function(){
        ready = true;
      }, 500);
  		$("#nav-icon").toggleClass('open');
      $('#overlay').toggleClass('open');
      $('#logo').toggleClass('invert');
      if ($('#navmenu').hasClass('open')) {
        $('.navcontent').addClass('delayingclose');
        $('.navcontent').addClass('hidden');
        $('.navcontent').removeClass('open');
        setTimeout(function(){
          $('.navcontent').removeClass('delayingclose');
          $('#navmenu').removeClass('open');
          $('.navcontent').removeClass('hidden');
        }, 200);
      } else {
        $('.navcontent').addClass('delayingopen');
        $('#navmenu').addClass('open');
        $('.navcontent').addClass('open');
        setTimeout(function(){
          $('.navcontent').removeClass('delayingopen');
        }, 200);
      }
    }
	});
});
