var total = 5;
let duration = 3000;
var mousevector = [0, 0];
let notes = {};

// parallaxing bear
$(document).ready(function(){
  $(".landingimagecontainer").mousemove(function(e) {
    parallaxIt(e, "#bear", -6);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("#bear");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
});

// music notes code
function Note() {
	this.notes = ['♪', '♬', '♫', '♩'];
	this.note = this.notes[randomInt(this.notes.length)];
	this.element = document.createElement('div');
  this.pointX = $("#bear").offset().left + 80;
  this.pointY = $("#bear").offset().top - 20;
	this.speed().display().newPoint().fly();
};

//	Generate Random Speed
Note.prototype.speed = function() {
	this.duration = duration;
	return this;
};

Note.prototype.newPoint = function() {
	this.pointX = $("#bear").offset().left + 80 + randomRange(-50, 50);
	this.pointY = 70;
	return this;
};

//	Display the Note
Note.prototype.display = function() {
	$(this.element)
    .text(this.note)
		.attr('class', 'ParticleNoMouse')
		.css('top', this.pointY)
		.css('left', this.pointX)
	$(".landingimagecontainer").append(this.element);
	return this;
};

//	Animate Note Movements
Note.prototype.fly = function() {
	var self = this;
  $(this.element).animate({"opacity": 1}, {duration: 1000, queue: false})

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

function createNoteInstant(i) {
  let note = new Note();
  let timer1 = setTimeout(function(){
    $(note.element).remove();
  }, note.duration)
  let timer2 = setTimeout(function(){
    $(note.element).animate({"opacity": 0}, {duration: 1000, queue: false})
  }, (note.duration/3))
}

function createNoteInterval(i) {
  let spacing = 5000
  setTimeout(function(){
    createNoteInstant(i, total)
    setInterval(function() {
      let note = new Note();
      notes[i] = note;
      let timer1 = setTimeout(function(){
        $(note.element).remove();
      }, note.duration)
      let timer2 = setTimeout(function(){
        $(note.element).animate({"opacity": 0}, {duration: 1000, queue: false})
      }, (note.duration/3))
    }, spacing)
  }, i*(spacing/total));
}

$(function(){
  let i = 0
	while (i < total){
    createNoteInterval(i);
    i++;
	}
});
