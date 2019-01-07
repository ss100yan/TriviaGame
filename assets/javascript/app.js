// timer countdown
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myVar=setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        };
         if (timer == 0) {myStopFunction();};
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 1.2,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
function myStopFunction() {
    clearInterval(myVar);
    isChecked ();
  }

      var correct = 0;
      var wrong = 0;
function isChecked (){
    var Q1Yes = document.getElementById('q1-yes').checked ;
    var Q2Yes = document.getElementById('q2-yes').checked ;
    var Q3Yes = document.getElementById('q3-yes').checked ;
    var Q4Yes = document.getElementById('q4-yes').checked ;
    var Q5Yes = document.getElementById('q5-yes').checked ;
    var Q6Yes = document.getElementById('q6-yes').checked ;
    var Q7Yes = document.getElementById('q7-yes').checked ;

    if ( Q1Yes == true ) {correct++;} else {wrong++;}
    if ( Q2Yes == true ) {correct++;} else {wrong++;}
    if ( Q3Yes == true ) {correct++;} else {wrong++;}
    if ( Q4Yes == true ) {correct++;} else {wrong++;}
    if ( Q5Yes == true ) {correct++;} else {wrong++;}
    if ( Q6Yes == true ) {correct++;} else {wrong++;}
    if ( Q7Yes == true ) {correct++;} else {wrong++;}

    alert("Correct answers:"+correct +"     "+"Wrong answers:"+ wrong);
};

