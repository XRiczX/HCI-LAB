const tombol = document.querySelector('.tombol');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})

function blurBackground(blur) {
    const background = document.querySelector('.background-navbar-img');
    if (blur) {
        background.style.filter = 'blur(0.3vw)';
    } else {
        background.style.filter = 'none';
    }
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function () {
        loader.style.display = 'none';
    },1300);
   
})
