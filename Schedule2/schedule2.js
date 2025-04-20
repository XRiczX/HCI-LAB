const tombol = document.querySelector('.tombol');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})

var countDownDate = new Date("August 1, 2024 10:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown1").innerHTML = days;
    document.getElementById("countdown2").innerHTML = hours;
    document.getElementById("countdown3").innerHTML = minutes;
    document.getElementById("countdown4").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown1").innerHTML = "0";
        document.getElementById("countdown2").innerHTML = "0";
        document.getElementById("countdown3").innerHTML = "0";
        document.getElementById("countdown4").innerHTML = "0";
    }
}, 1000);

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function () {
        loader.style.display = 'none';
    },1300);
   
})