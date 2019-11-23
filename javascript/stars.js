$(document).ready(function(){
  // randomize initial opacity
  randomizeopacity(jQuery('#stars1'));
  randomizeopacity(jQuery('#stars2'));
  randomizeopacity(jQuery('#stars3'));
  // randomizeopacity(jQuery('#stars4'));
  // randomizeopacity(jQuery('#stars5'));
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomizeopacity(star) {
    let rand = Math.random();
    star.css({opacity: rand});
  }
  var timer1;
  var timer2;
  var timer3;
  var timer4;
  var timer5;

  var op = 1;  // initial opacity
  var timer1 = setInterval(function () {
    randomizeopacity(jQuery('#stars1'));
  }, getRandomInt(2000, 4000));
  var timer2 = setInterval(function () {
    randomizeopacity(jQuery('#stars2'));
  }, getRandomInt(3000, 5000));
  var timer3 = setInterval(function () {
    randomizeopacity(jQuery('#stars3'));
  }, getRandomInt(3000, 5000));
  // var timer4 = setInterval(function () {
  //   randomizeopacity(jQuery('#stars4'));
  // }, getRandomInt(2000, 4000));
  // var timer5 = setInterval(function () {
  //   randomizeopacity(jQuery('#stars5'));
  // }, getRandomInt(2000, 4000));
});
