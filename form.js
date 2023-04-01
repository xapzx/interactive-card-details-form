const confirm_btn = document.querySelector('.confirm-btn');
const cc_name_input = document.querySelector('#name');
const cc_name = document.querySelector('.error-msg-name');
const card_number = document.querySelector('#card-number');
const date_err = document.querySelector('.error-msg-date');
const month = document.querySelector('#exp-month');
const year = document.querySelector('#exp-year');
const cvc_input = document.querySelector('#cvc');
const cvc = document.querySelector('.error-msg-cvc');
const number = document.querySelector('.error-msg-number');

const regex = new RegExp("^[0-9]+$");
function validateNumber(number) {
    if (regex.test(number)) {
        return true;
    } else {
        return false;
    }
}

confirm_btn.addEventListener('click', (event) => {
    event.preventDefault();

    if(cc_name_input.value === "") {
        cc_name.style.display = "block";
    } else {
        cc_name.style.display = "none";
    }

    const cc_trimmed = card_number.value.replace(/ /g, "");
    if(cc_trimmed.length < 16) {
        number.style.display = "block";
        number.innerText = "Not enough numbers";
    } else if (validateNumber(cc_trimmed)){
        number.style.display = "none";
    } else {
        number.style.display = "block";
        number.innerText = "Wrong format, numbers only";
    }

    if(month.value === "" || year.value === "") {
        date_err.style.display = "block";
    } else {
        date_err.style.display = "none";
    }

    if(cvc_input.value === "") {
        cvc.style.display = "block";
    } else {
        cvc.style.display = "none";
    }
});