function timeout () {
    setTimeout(function() {
    var $h1 = document.querySelector("body > h1")
    $h1.innerHTML = 'Hello There'},
    2000);    
}