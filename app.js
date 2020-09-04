// current date
// ending date

const weeksEl = document.getElementById("weeks");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthDay = "14, Nov, 2020";

function countdown() {
    const d1 = new Date(birthDay);
    const d2 = new Date()

    const DateDiff = {
        // get weeks
        inWeeks: function(d1, d2) {
            const t1 = d1.getTime();
            const t2 = d2.getTime();
    
            return parseInt((t1-t2) / (24*3600*1000*7));
        },
    
        // get days
        inDays: function(d1, d2) {
            const t1 = d1.getTime();
            const t2 = d2.getTime();
    
            return parseInt((t1-t2) / (24*3600*1000));
        },
    
        // get hours
        inHours: function(d1, d2) {
            const t1 = d1.getHours();
            const t2 = d2.getHours();
    
            return parseInt(((t2-t1)))
        },
    
        // get minutes
        inMinutes: function(d1, d2) {
            const t1 = d1.getMinutes();
            const t2 = d2.getMinutes();
    
            return parseInt(((t2-t1)))
        }, 
    
        // get seconds
        inSeconds: function(d1, d2) {
            const t1 = d1.getSeconds();
            const t2 = d2.getSeconds();
    
            return parseInt(((t2-t1)))
        }
    
    }

    const weeks = DateDiff.inWeeks(d1, d2)
    const days = DateDiff.inDays(d1, d2)
    const hours = DateDiff.inHours(d1, d2)
    const minutes = DateDiff.inMinutes(d1, d2)
    const seconds = DateDiff.inSeconds(d1, d2)

    weeksEl.innerHTML = weeks
    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}

// initial call
countdown()

setInterval(countdown, 1000);







