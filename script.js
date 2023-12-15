let hour = document.getElementById('hour');
let minute = document.getElementById('min');
let seconds = document.getElementById('sec');


function clockTime(){

    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();


    let hourRotation = 30*h + m/2;
    let minuteRotation = 6*m;
    let secondsRotation = 6*s;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    seconds.style.transform = `rotate(${secondsRotation}deg)`;


}


setInterval(clockTime, 1000);