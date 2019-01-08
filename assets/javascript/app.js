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
      var unanswerd=0;
function isChecked (){
    var Q1Yes = document.getElementById('q1-yes').checked ;
    var Q2Yes = document.getElementById('q2-yes').checked ;
    var Q3Yes = document.getElementById('q3-yes').checked ;
    var Q4Yes = document.getElementById('q4-yes').checked ;
    var Q5Yes = document.getElementById('q5-yes').checked ;
    var Q6Yes = document.getElementById('q6-yes').checked ;
    var Q7Yes = document.getElementById('q7-yes').checked ;

    var Q1No = document.getElementById('q1-no').checked ;
    var Q2No = document.getElementById('q2-no').checked ;
    var Q3No = document.getElementById('q3-no').checked ;
    var Q4No = document.getElementById('q4-no').checked ;
    var Q5No = document.getElementById('q5-no').checked ;
    var Q6No = document.getElementById('q6-no').checked ;
    var Q7No = document.getElementById('q7-no').checked ;

    if ( Q1Yes == true ) {correct++;} else if (Q1No == true){wrong++;}else {unanswerd++;};
    if ( Q2Yes == true ) {correct++;} else if (Q2No == true){wrong++;}else {unanswerd++;};
    if ( Q3Yes == true ) {correct++;} else if (Q3No == true){wrong++;}else {unanswerd++;};
    if ( Q4Yes == true ) {correct++;} else if (Q4No == true){wrong++;}else {unanswerd++;};
    if ( Q5Yes == true ) {correct++;} else if (Q5No == true){wrong++;}else {unanswerd++;};
    if ( Q6Yes == true ) {correct++;} else if (Q6No == true){wrong++;}else {unanswerd++;};
    if ( Q7Yes == true ) {correct++;} else if (Q7No == true){wrong++;}else {unanswerd++;};

    alert("Correct answers:"+correct +"   "+"Wrong answers:"+ wrong + "   "+ "Unanswerd:"+unanswerd);
};

