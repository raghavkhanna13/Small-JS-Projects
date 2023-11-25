setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = (30 * hours) + (minutes / 2) + (seconds / 120);
    let minuteRotation = (6 * minutes) + (seconds / 10);
    let secondRotation = 6 * seconds;

    document.querySelector('#hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('#minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('#second').style.transform = `rotate(${secondRotation}deg)`;
}, 1000);