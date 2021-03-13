function countdown() {
    var $h1 = document.querySelector("h1");
    var i = 4;
    var timerID = setInterval(function () {
        $h1.innerHTML = i;
        i -= 1;
        if (i < 0) {
            clearInterval(timerID);
            $h1.innerHTML = '~Earth Beeeelooowww Us~';
        }
    }, 1000);
}

