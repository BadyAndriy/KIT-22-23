
// =======================================================

// =======================================================

// =======================================================

// =======================================================

// =======================================================

// =======================================================

// =======================================================
const todos = JSON.parse(localStorage.getItem("dark-mode"));

if (todos == '1') {
  $('body').toggleClass('dark-mode')
  $('html').toggleClass('dark-mode')
}
function white() {
  localStorage.removeItem("dark-mode", JSON.stringify(1));
  location.reload();
}
function dark() {
  localStorage.setItem("dark-mode", JSON.stringify(1));
  location.reload();
}
// =======================================================

// =======================================================
$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});
// =======================================================
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '2021-1-1';
initializeClock('countdown2', deadline);
 
var deadline = '2021-5-31';
initializeClock('countdown', deadline);
// =======================================================
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.remove('loaded_hiding');
  }, 1150);
}
// =======================================================
