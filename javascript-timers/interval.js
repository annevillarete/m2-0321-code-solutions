function countdown() {
    var $h1 = document.querySelector("h1");
    var i = 4;
    var timerID = setInterval(function () {
        $h1.textContent = i;
        i -= 1;
        if (i < 0) {
            clearInterval(timerID);
            $h1.textContent = '~Earth Beeeelooowww Us~';
        }
    }, 1000);
}

