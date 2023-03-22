let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    let diff = (newYearsDate - currentDate) / 1000;
    let days = Math.floor(diff / 3600 / 24);
    let hours = Math.floor(diff / 3600) % 24;
    let mins = Math.floor(diff / 60) % 60;
    let secs = Math.floor(diff) % 60;

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;
}

// function format(time) {
//     if (time < 10) {
//         return "${ time }";
//     }
//     else {
//         return time;
//     }
// }

setInterval(countdown, 1000);   