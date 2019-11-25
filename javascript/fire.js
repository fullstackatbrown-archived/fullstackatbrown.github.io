var total = 60;
let duration = 1300;
var mousevector = [0, 0];
let variance = 4;
// radians
let angle = 0.506145;
let hypotenuse = 1000;

function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

// parallaxing ship
$(document).ready(function(){
  $(".landingimagecontainer").mousemove(function(e) {
    parallaxIt(e, "#ship", -10);
    parallaxIt(e, "#window", -7);
    flameAdjust(e);
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

  function flameAdjust(e) {
    var $this = $("#ship");
    var relX = e.pageX - ($this.offset().left + 95);
    var relY = e.pageY - ($this.offset().top + 355);
    variance = 4+(200*(1/Math.sqrt((relX*relX)+(relY*relY))))
    // clamp variance at 12
    if (variance > 12) {
      variance = 12;
    }
  }
});

// music flames code
function Flame() {
	this.element = $.parseHTML(`<svg style="z-index: -1" height="100" width="100">
                                <circle cx="50" cy="50" r="40"
                                        stroke-width="3" fill="` + LightenDarkenColor("#e0e0e0", -(variance*3)) + `" />
                              </svg>`)
	this.speed().display().newPoint().fly();
};

//	Generate Random Speed
Flame.prototype.speed = function() {
	this.duration = duration;
	return this;
};

Flame.prototype.newPoint = function() {
	this.pointX = $("#ship").offset().left - (Math.asin(angle)*hypotenuse) + randomRange(-20*variance, 20*variance);
	this.pointY = $("#ship").offset().top + 400 + (Math.acos(angle)*hypotenuse);
  console.log($("#ship").offset().top + 200 + (Math.acos(angle)*hypotenuse))
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
  $(this.element).animate({"opacity": 0}, {duration: 600, queue: false})
	$(this.element).animate({
		"top": this.pointY,
		"left": this.pointX,
	}, this.duration, 'linear');
};

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function createFlameInterval() {
  let flames = []
  let spacing = 240
  let i = 0;
  setInterval(function() {
    flames[i%total] = new Flame();
    if (flames[(i+1)%total] !== undefined) {
      $(flames[(i+1)%total].element).remove()
    }
    i++
  }, 30)
}

$(function(){
    createFlameInterval();
});
