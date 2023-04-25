"use strict"

// GET DOM ELEMENTS
const cardNumber = document.getElementById ("number");
const numberInput = document.getElementById ("card__number");

const cardName = document.getElementById ("name");
const nameInput = document.getElementById("card__name");

const cardMonth = document.getElementById ("month");
const monthInput = document.getElementById ("card__month");

const cardYear = document.getElementById ("year");
const yearInput = document.getElementById ("card__year");

const cardCvc = document.getElementById ("cvc");
const cvcInput = document.getElementById ("card__cvc");

const SubmitButton = document.getElementById ("submit__button");

const completed = document.querySelector ("thanks");

const form = document.querySelector ("section__right--form");

// FUNCTIONS
function setCardNumber(e) {
    cardNumber.innerText = format (e.target.value);
}
function setCardName (e) {
    cardName.innerText = e.target.value;
}

function setCardMonth (e) { 
    cardMonth.innerText = e.target.value;
}
function setCardYear (e) {
    cardYear.innerText = e.target.value;
}
function setCardCvc (e) {
    cardCvc.innerText = e.target.value;
}

// Function Format
function format(s) {
    return s.toString().replace(/\D/g, '');
} 

//Function Submit Button
function handleSubmit (e) {
    e.preventDefault();
    if (!nameInput.value) {
        nameInput.classList.add ("error");
        nameInput.parentElement.classList.add("error_message");
    } else {
        nameInput.classList.remove ("error");
        nameInput.parentElement.classList.remove("error_message");
    }
    if (!numberInput.value) {
        numberInput.classList.add ("error");
        numberInput.parentElement.classList.add("error_message");
    } else {
        numberInput.classList.remove ("error");
        numberInput.parentElement.classList.remove("error_message");
    }
    if (!monthInput.value) {
        monthInput.classList.add ("error");
        monthInput.parentElement.classList.add("error_message");
    } else {
        monthInput.classList.remove ("error");
        monthInput.parentElement.classList.remove("error_message");
    }
    if (!yearInput.value) {
        yearInput.classList.add ("error");
        yearInput.parentElement.classList.add("error_message");
    } else {
        yearInput.classList.remove ("error");
        yearInput.parentElement.classList.remove("error_message");
    }
    if (!cvcInput.value) {
        cvcInput.classList.add ("error");
        cvcInput.parentElement.classList.add("error_message");
    } else {
        cvcInput.classList.remove ("error");
        cvcInput.parentElement.classList.remove("error_message");
    }
    if(nameInput.value&&numberInput.value&&monthInput.value&&yearInput.value&&cvcInput.value){
        completed.classList.remove("hidden");
        form.classList.add("hidden");
    }
}


// EVENTOS
numberInput.addEventListener("keyup",setCardNumber);
nameInput.addEventListener("keyup",setCardName);
monthInput.addEventListener("keyup",setCardMonth);
yearInput.addEventListener("keyup",setCardYear);
cvcInput.addEventListener("keyup",setCardCvc);
SubmitButton.addEventListener("click",handleSubmit);


