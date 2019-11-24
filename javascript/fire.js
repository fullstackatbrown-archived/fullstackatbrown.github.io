var total = 6;
let duration = 1300;
var mousevector = [0, 0];

// parallaxing ship
$(document).ready(function(){
  // $("#window").css({
  //   top: $("#ship").offset().top+90,
  //   left: $("#ship").offset().left+173,
  // });
  // $(window).resize(function() {
  //   $("#window").css({
  //     top: $("#ship").offset().top+90,
  //     left: $("#ship").offset().left+173,
  //   });
  // })

  $(".landingimagecontainer").mousemove(function(e) {
    parallaxIt(e, "#ship", -10);
    parallaxIt(e, "#window", -7);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("#ship");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
});

// music flames code
function Flame() {
	this.element = $.parseHTML(`<svg style="z-index: -1" height="100" width="100">
                                <circle cx="50" cy="50" r="40"
                                        stroke-width="3" fill="#e0e0e0" />
                              </svg>`)
	this.speed().display().newPoint().fly();
};

//	Generate Random Speed
Flame.prototype.speed = function() {
	this.duration = duration;
	return this;
};

Flame.prototype.newPoint = function() {
	this.pointX = $("#ship").offset().left -365 + randomRange(-150, 150);
	this.pointY = $(window).height()+500;
	return this;
};

//	Display the Flame
Flame.prototype.display = function() {
	$(this.element)
		.attr('class', 'ParticleNoMouse')
		.css('top', ($("#ship").offset().top + 295))
		.css('left', ($("#ship").offset().left + 45))
	$(".landingimagecontainer").append(this.element);
	return this;
};

//	Animate Flame Movements
Flame.prototype.fly = function() {
	var self = this;
	$(this.element).animate({
		"top": this.pointY,
		"left": this.pointX,
	}, this.duration, 'linear', function(){
		self.speed().newPoint().fly();
	});
};

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createFlameInstant(i) {
  let flame = new Flame();
  let timer1 = setTimeout(function(){
    $(flame.element).remove();
  }, flame.duration)
}

function createFlameInterval(i) {
  let spacing = 240
  createFlameInstant(i, total)
  setInterval(function() {
    let flame = new Flame();
    setTimeout(function(){
      $(flame.element).remove();
    }, 600)
  }, 30)
}

$(function(){
    createFlameInterval(0);
});
