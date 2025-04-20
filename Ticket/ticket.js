const tombol = document.querySelector('.tombol');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function () {
        loader.style.display = 'none';
    },1300);
   
})