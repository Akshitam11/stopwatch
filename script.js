let hourP = document.querySelector(".hour p")
let minuteP = document.querySelector(".minute p")
let secondP = document.querySelector(".second p")
let milisecondP = document.querySelector(".milisecond p")

pause = document.querySelector("#pauseTimer")
start = document.querySelector("#startTimer")
reset = document.querySelector("#resetTimer")

// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(milisecond);


let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let interval;

start.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            milisecond += 10;
            // milisecondP.innerText = milisecond;

            // if (milisecond < 10) {
            //     milisecondP.innerText = "00" + milisecond;
            // }
            if (milisecond < 100) {
                milisecondP.innerText = "0" + milisecond;
            }
            else {
                milisecondP.innerText = milisecond;
            }



            if (milisecond >= 999) {
                second++;
                milisecond = 0;

                if (second < 10) {
                    secondP.innerText = "0" + second;
                }
                else {
                    secondP.innerText = second;
                }

                if (second > 59) {
                    second = 0;
                    milisecond = 0;

                    // secondP.innerText = "00"
                    milisecondP.innerText = "000";
                    secondP.innerText = "00"
                    minute++;

                    if (minute < 10) {
                        minuteP.innerText = "0" + minute;
                    }
                    else {
                        minuteP.innerText = minute;
                    }

                    if (minute == 59) {
                        minute = 0;
                        second = 0;
                        milisecond = 0;
                        minuteP.innerText = "00";

                        hour++;

                        if (hour < 10) {
                            hourP.innerText = "0" + hour;
                        }
                        else {
                            hourP.innerText = hour;
                        }
                    }
                }
            }
        }, 10)
    }
})



pause.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval)
        interval = null;
    }
})

reset.addEventListener('click', () => {
    hour = 0;
    minute = 0;
    second = 0;
    milisecond = 0;

    hourP.innerText = "00"
    minuteP.innerText = "00"
    secondP.innerText = "00"
    milisecondP.innerText = "000"

    if(interval) {
        clearInterval(interval)
        interval = null;
    }
})



