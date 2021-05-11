var started;

window.onload = function(){
    started = false;
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
    if(started == false){
        started = true;
        var timer = duration, m, s;
        var intervalId = setInterval(function () {
            if (--timer < 0) {
                started = false;
                timer = duration;
                playAlarm();
                clearInterval(intervalId);
            }
            m = parseInt(timer / 60, 10);
            s = parseInt(timer % 60, 10);
    
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
    
            display.textContent = m + ":" + s;
        }, 1000);
    }
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