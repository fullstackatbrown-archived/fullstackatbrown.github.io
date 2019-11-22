$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('#overlay').toggleClass('open');
    $('#logo').toggleClass('invert')
	});
});
