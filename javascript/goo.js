$(document).ready(function(){
  var radius = 8;
  let origins = ['440px 600px', '540px 310px', '430px 180px', '330px 445px', '134px 400px'];
  $(".blob").each(function(index) {
    $(this).css({'transform-origin': origins[index]});
    $(this).css({'animation': 'circle 4s linear infinite'});
    })
  });
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
// });
