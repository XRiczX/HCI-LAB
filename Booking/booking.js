const tombol = document.querySelector('.tombol');
const navigation = document.querySelector('.navigation');
const tombolPrem = document.getElementById('tombol-prem');
const tombolStand = document.getElementById('tombol-stand');
const premContainer = document.getElementById('premCont');
const standContainer = document.getElementById('standCont');
const standContent = document.getElementById('standContent');
const premContent = document.getElementById('premContent');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 1) {
        document.querySelector('.navcontainer').style.transform = 'none';
    } else {
        document.querySelector('.navcontainer').style.transform = 'translateX(0vw)';
    }
})

tombol.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})

tombolPrem.addEventListener("click", () => {
    premContainer.style.display = 'flex';
    tombolPrem.style.color = "#FFFFFF";
    tombolStand.style.color = "#FFFFFF";
    standContainer.style.display = 'none';
    premContent.style.display = 'flex';
    standContent.style.display = 'none';
    tombolStand.style.borderBottom = '0';
    tombolPrem.style.borderBottom = '#F7B176 solid 0.5vw';
})

tombolStand.addEventListener("click", () => {
    tombolPrem.style.color = "FFFFFF";
    tombolStand.style.color = "#FFFFFF";
    premContainer.style.display = 'none';
    standContainer.style.display = 'flex';
    premContent.style.display = 'none';
    standContent.style.display = 'flex';
    tombolStand.style.borderBottom = '#F7B176 solid 0.5vw';
    tombolPrem.style.borderBottom = '0';
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function () {
        loader.style.display = 'none';
    },1300);
   
})