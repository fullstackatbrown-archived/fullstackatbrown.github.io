var cananimate = true;

// Detect if chrome
var isChrome = !!window.chrome

$(document).ready(function(){

  // Detects if browser can handle animation
  let starttime = new Date();
  var lastLoop = new Date();
  var count = 0;
  var total = 0;
  function fpsLoop() {
      count += 1;
      var thisLoop = new Date();
      var fps = 1000 / (thisLoop - lastLoop);
      total += fps;
      lastLoop = thisLoop;
      if ((thisLoop.getTime()-starttime.getTime())/1000 >= 3.5) {
        clearInterval(fpsLoopId);
        if (total/200 < 70) {
          console.log((total/200) + "fps stopping animation")
          $(".blob").each(function(index) {
            $(this).css({'animation': 'none'});
          });
          cananimate = false;
        } else {
          console.log((total/200) + "fps continuing animation")
        }
      }
  }


  if (isChrome) {
    // Test if browser can handle animation
    fpsLoopId = setInterval(fpsLoop, 10);
    // Goo JQuery animation
    var radius = 8;
    let origins = ['440px 600px', '540px 310px', '430px 180px', '330px 445px', '134px 400px'];
    $(".blob").each(function(index) {
      $(this).css({'transform-origin': origins[index]});
      $(this).css({'animation': 'circle 4s linear infinite'});
    });
  }

  // TweenMax implementation, saved for possible optimization

  // var radius = 8;
	// TweenMax.staggerFromTo('.blob', 4 ,{
	// 	cycle: {
	// 		attr:function(i) {
	// 			var r = i*90;
	// 			return {
	// 				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
	// 			}
	// 		}
	// 	}
	// },{
	// 	cycle: {
	// 		attr:function(i) {
	// 			var r = i*90+360;
	// 			return {
	// 				transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
	// 			}
	// 		}
	// 	},
	// 	ease:Linear.easeNone,
	// 	repeat:-1
	// });

  // Parallaxing animations
  $("body").mousemove(function(e) {
    parallaxIt(e, "#goosvg", -20);
    parallaxIt(e, "#planet1", -10);
  });
  function parallaxIt(e, target, movement) {
    var $this = $("#planet1");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
});
