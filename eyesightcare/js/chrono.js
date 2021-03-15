window.onload = function(){
    mostraHora();
};

function mostraHora(){
    var date, seconds, minutes, hour, dd, mm, yyyy, mdyhms;
    var horaactual = document.getElementById('Horaactual');
    var horaactualtitle = document.getElementById('Horaactualtitle');
    horaactualtitle.innerHTML = "Your Time";  
    setInterval(function (){
        date = new Date();
        seconds =  String(date.getSeconds()).padStart(2, '0');
        minutes = String(date.getMinutes()).padStart(2, '0');
        hour = String(date.getHours()).padStart(2, '0');
        dd = String(date.getDate()).padStart(2, '0');
        mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = date.getFullYear();
    
        mdyhms = mm + '/' + dd + '/' + yyyy + '<br>' + hour + ':' + minutes + ':' + seconds;
        horaactual = document.getElementById('Horaactual');
        horaactualtitle = document.getElementById('Horaactualtitle');
        horaactual.innerHTML = mdyhms; 
    }, 1000);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            playAlarm();
            mostraCount();
            clearInterval(intervalId);
        }
    }, 1000);
}

function mostraCount(){
    var numberOfMinutes = 60*20;
    var display = document.getElementById('Countdown');
    startTimer(numberOfMinutes, display);
}

function playAlarm(){
    var audio = document.getElementById("alarm");
    audio.play();
}