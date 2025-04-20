const tombolPayment1 = document.getElementById("payment-method1");
const tombolPayment2 = document.getElementById("payment-method2");
const visaPay = document.getElementById("visa-payment");
const jetePay = document.getElementById("jetelika-payment");
const applyRegis = document.getElementById("apply-button-regis");
const selectPay = document.getElementById("select-pay");
const applyVisa = document.getElementById("apply-visa");
const applyJetelika = document.getElementById("apply-jetelika");

const username = document.getElementById("username");
const email = document.getElementById("email");
const date = document.getElementById("date");
const error = document.querySelector(".error-message");

const visaNum = document.getElementById("visa-number");
const cvvNum = document.getElementById("cvv-number");
const dateNum = document.getElementById("date-number");
const errorVisa = document.querySelector(".error-visa");

const phoneNum = document.getElementById("jetelika-number");
const errorJete = document.querySelector(".error-jetelika");

const tombol = document.querySelector('.tombol');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click',()=>{
    navigation.classList.toggle('active');
})

let today = new Date();
let dates = today.getDate();
if (dates < 10) {
    dates = "0" + dates.toString();
}

let month = today.getMonth() + 1;
if (month < 10) {
    month = "0" + month.toString();
}

let year = today.getFullYear();
let todayDate = year + "-" + month + "-" + dates;
date.setAttribute("min", todayDate);

// Input angka CVV
const inputCVV = document.getElementById("cvv-number");

inputCVV.addEventListener("input", function(event) {
    let inputVal = event.target.value;
    inputVal = inputVal.replace(/\D/g, '');
    event.target.value = inputVal;

    if(inputVal.length > 3) {
        inputVal = inputVal.slice(0, 3);
    }

    event.target.value = inputVal;
})

// Input angka CC
const inputCC = document.getElementById("visa-number");

inputCC.addEventListener("input", function(event) {
    let inputVal = event.target.value;
    inputVal = inputVal.replace(/\D/g, '');
    event.target.value = inputVal;

    if(inputVal.length > 16) {
        inputVal = inputVal.slice(0, 16);
    }

    event.target.value = inputVal;
})

// Input angka Date
const inputDate = document.getElementById("date-number");

inputDate.addEventListener("input", function(event) {
    let inputVal = event.target.value;

    if(inputVal.length > 5) {
        inputVal = inputVal.slice(0, 5);
    }

    event.target.value = inputVal;
})

const dateRegis = document.getElementById("date");

function dateCheck(dateInput) {
    const inputDate = new Date(dateInput);
    const currentDate = new Date();
    return inputDate >= currentDate;
}

// Regis Validation
applyRegis.addEventListener("click", () => {
    if(username.value.length == 0 || email.value.length == 0 || date.value.length == 0) {
        error.innerHTML = "There are several empty lists!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    }

    if(username.value.split(" ").length < 2) {
        error.innerHTML = "Name must contains at least 2 word!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    } 

    if(username.value.indexOf(" ") == 0) {
        error.innerHTML = "Space can not in first!";
        return;
    }

    if(username.value.lastIndexOf(" ") == username.value.length - 1) {
        error.innerHTML = "Space can not in end!";
        return;
    }

    let value = email.value.length;
    let count = 0;
    let count2 = 0;

    for(let i = 0; i < value; i++) {
        if(email.value[i] == "@") {
            count += 1;
        }
        if(email.value[i] == ".") {
            count2 += 1;
        }
    }
    if(count != 1) {
        error.innerHTML = "Emails can only contain 1 ' @ '!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    }

    if(count2 < 1) {
        error.innerHTML = "Emails must contain at least 1 ' . '!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    }

    if(!email.value.endsWith("@gmail.com") && !email.value.endsWith(".co.id")) {
        error.innerHTML = "Email must contain @gmail.com or another domain!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    }

    if(!dateCheck(dateRegis.value)) {
        error.innerHTML = "Reservations cannot be made for the day and before!";
        selectPay.style.display = "none";
        visaPay.style.display = "none";
        jetePay.style.display = "none";
        return;
    }

    selectPay.style.display = "flex";
    error.innerHTML = "";
})

let benar = false;

// Visa Payment Validate
applyVisa.addEventListener("click", () => {
    if(visaNum.value.length == 0 || cvvNum.value.length == 0 || dateNum.value.length == 0) {
        errorVisa.innerHTML = "There are several empty lists!";
        return;
    }

    if(visaNum.value.length != 16) {
        errorVisa.innerHTML = "Visa number must contain at least 16 digit!";
        return;
    }

    if(dateNum.value.length != 5) {
        errorVisa.innerHTML = "Expired Date is invalid!";
        return;
    }

    if(dateNum.value[2] != "/") {
        errorVisa.innerHTML = "Wrong Date Input Format!";
        return;
    }

    if(cvvNum.value.length != 3) {
        errorVisa.innerHTML = "CVV Number is invalid!";
        return;
    }

    errorVisa.innerHTML = "";
    benar = true;
})

// Jetelika Payment Validation 
applyJetelika.addEventListener("click", () => {
    if(phoneNum.value.length == 0) {
        errorJete.innerHTML = "There are several empty lists!";
        return;
    }

    if(phoneNum.value.length < 10) {
        errorJete.innerHTML = "Wrong Phone Number Input Format!";
        return;
    }

    errorJete.innerHTML = "";
    benar = true;
})

tombolPayment1.addEventListener("click" , () => {
    tombolPayment1.style.backgroundColor = "#121F2F";
    tombolPayment2.style.backgroundColor = "#FFFFFF";
    visaPay.style.display = "flex";
    jetePay.style.display = "none";
})

tombolPayment2.addEventListener("click" , () => {
    tombolPayment2.style.backgroundColor = "#121F2F";
    tombolPayment1.style.backgroundColor = "#FFFFFF";
    visaPay.style.display = "none";
    jetePay.style.display = "flex";
})

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function () {
        loader.style.display = 'none';
    },1300);
   
})

const applyButVisa = document.getElementById("apply-visa");
const applyButJete = document.getElementById("apply-jetelika");
const alertTrig = document.getElementById("alert-button");

applyButVisa.addEventListener("click", () => {
    if(benar) {
        alertTrig.style.display = "flex";
        setTimeout(function() {
            window.location.href = "../Events/index.html";
        }, 2500);
    }
})

applyButJete.addEventListener("click", () => {
    if(benar) {
        alertTrig.style.display = "flex";
        setTimeout(function() {
            window.location.href = "../Events/index.html";
        }, 2500);
    }
})