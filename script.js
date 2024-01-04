var origintext = document.querySelector("#origintext");
var entertext = document.querySelector("#entertext");
var timebox = document.querySelector(".timebox");
var timer = document.querySelector(".timer");
var resetbtn = document.querySelector(".reset");
var timevar = [0, 0, 0];
var isRunnning = false;
var interval;
function leadZero(num) {
    var res;
    if (num < 10) {
        res = "0" + num;
    }
    else {
        res = num;
    }
    return res;
}

function timerfunc() {

    timer.innerHTML = leadZero(timevar[0]) + ":" + leadZero(timevar[1]) +
        ":" + leadZero(timevar[2]);
    timevar[2]++;
    if (timevar[2] > 99) {
        timevar[2] = 0;
        timevar[1]++;
        if (timevar[1] > 59) {
            timevar[1] = 0;
            timevar[0]++;
        }
    }
}

function startTimer() {

    if (entertext.value.lenght != 0 && !isRunnning) {
    interval=setInterval(timerfunc, 10);
    }
    isRunnning = true;
    
}
var enter;
function spelltest() {
    enter = entertext.value;
    if (enter && enter == origintext.value.substring(0, enter.length)) {
        
        entertext.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw yellow";
        timebox.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw yellow";
        if (enter == origintext.value) {
            timebox.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw green";
            entertext.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw green";
            document.querySelector(".passed").style.display = "flex";
            clearInterval(interval);
        }
    } else {
        timebox.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw red";
        entertext.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw red";
    }
}
function reset() {
    clearInterval(interval);
    interval = null;
    document.querySelector(".passed").style.display = "none";
    isRunnning = false;
    timevar = [0, 0, 0];


    entertext.value = '';
    timer.innerHTML = "00:00:00";

    entertext.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw grey";
    timebox.style.cssText = "box-shadow:0.1vw -0.1vw 0.1vw 0.8vw grey";

}
entertext.addEventListener("keyup", spelltest);
entertext.addEventListener("keypress", startTimer);
resetbtn.addEventListener("click", reset);