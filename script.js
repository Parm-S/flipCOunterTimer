var eventDate = new Date("Aug 24, 2021 16:09:00");
var countDownDate=eventDate.getTime();
i = 0;
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  rotateOnDaysChange(days)
  rotateOnHoursChange(hours)
  rotateOnMinutesChange(minutes)

  rotateOnSecondsChange(seconds);

  if (distance <= 0) {
    clearInterval(x);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("flip-counter").innerText = "The Event started on "+eventDate.toLocaleDateString("hi-IN",options);
    console.log(document.getElementById("flip-counter"));
  }
}, 1000);

function rotateOnDaysChange(days) {
  document.getElementById("top-days").innerText = days;
  let el_bottom = document.getElementById("bottom-days");

  document.querySelector('#bottom-back-days').innerText = days;
  el_bottom.innerText = days;

  el_bottom.style.transformStyle = "preserve-3d";
  el_bottom.style.perspective = "1000px";

  if (days % 2 == 0) {

    el_bottom.style.transition = "transform 0.8s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(180deg)";
  } else {

    el_bottom.style.transition = "transform 0.8s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(0)";


  }
}
function rotateOnHoursChange(hours) {
  document.getElementById("top-hours").innerText = hours;
  let el_bottom = document.getElementById("bottom-hours");

  document.querySelector('#bottom-back-hours').innerText = hours;
  el_bottom.innerText = hours;

  el_bottom.style.transformStyle = "preserve-3d";
  el_bottom.style.perspective = "1000px";

  if (hours % 2 == 0) {

    el_bottom.style.transition = "transform 1s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(180deg)";
  } else {

    el_bottom.style.transition = "transform 1s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(0)";


  }
}
function rotateOnMinutesChange(minutes) {
  document.getElementById("top-minutes").innerText = minutes;
  let el_bottom = document.getElementById("bottom-minutes");

  document.querySelector('#bottom-back-minutes').innerText = minutes;
  el_bottom.innerText = minutes;

  el_bottom.style.transformStyle = "preserve-3d";
  el_bottom.style.perspective = "1000px";

  if (minutes % 2 == 0) {

    el_bottom.style.transition = "transform 0.8s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(180deg)";
  } else {

    el_bottom.style.transition = "transform 0.8s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(0)";


  }
}
function rotateOnSecondsChange(seconds) {
  document.getElementById("top-seconds").innerText = seconds;
  let el_bottom = document.getElementById("bottom-seconds");

  document.querySelector('#bottom-back-seconds').innerText = seconds;
  el_bottom.innerText = seconds;

  el_bottom.style.transformStyle = "preserve-3d";
  el_bottom.style.perspective = "100px";




  if (seconds % 2 == 0) {

    el_bottom.style.transition = "transform 1.2s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(180deg)";
  } else {

    el_bottom.style.transition = "transform 1.2s ease-in-out";
    el_bottom.style.transformOrigin = "top";
    el_bottom.style.transform = "rotateX(-180deg)";


  }
}