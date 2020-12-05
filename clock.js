function second() {
    let now = new Date();

    let sec = now.getSeconds();
    let s = ((sec / 60) * 360);
    let seconds = document.querySelector('.seconds');
    seconds.style.transform = `rotate(${s}deg)`;

    let min = now.getMinutes()
    let m = ((min / 60) * 360) + ((sec / 60) * 6);
    console.log(m)
    let minute = document.querySelector('.minutes');
    minute.style.transform = `rotate(${m}deg)`;

    let hr = now.getHours();
    let h = ((hr / 12) * 360) + ((min / 60) * 30);

    let hour = document.querySelector('.hours');
    hour.style.transform = `rotate(${h}deg)`;


}
setInterval(second, 1000);