const name_input = document.querySelector('#name');
const cc_owner = document.querySelector('.cc-owner');

const cc_number_input = document.querySelector('#card-number');
const cc_number = document.querySelector('.cc-number');

const cc_month_input = document.querySelector('#exp-month');
const cc_month = document.querySelector('.cc-month');

const cc_year_input = document.querySelector('#exp-year');
const cc_year = document.querySelector('.cc-year');

const cc_cvc_input = document.querySelector('#cvc');
const cc_cvc = document.querySelector('.cc-cvc');

function updateName() {
    cc_owner.innerText = name_input.value;
}

name_input.addEventListener('change', updateName);
name_input.addEventListener('keyup', updateName);

function updateNumber() {
    const number_spaced = cc_number_input.value.match(/.{1,4}/g).join(' ');
    cc_number.innerText = number_spaced;
}

cc_number_input.addEventListener('change', updateNumber);
cc_number_input.addEventListener('keyup', updateNumber);

function updateMonth() {
    cc_month.innerText = cc_month_input.value;
}

cc_month_input.addEventListener('change', updateMonth);
cc_month_input.addEventListener('keyup', updateMonth);

function updateYear() {
    cc_year.innerText = cc_year_input.value;
}

cc_year_input.addEventListener('change', updateYear);
cc_year_input.addEventListener('keyup', updateYear);

function updateCvc() {
    cc_cvc.innerText = cc_cvc_input.value;
}

cc_cvc_input.addEventListener('change', updateCvc);
cc_cvc_input.addEventListener('keyup', updateCvc);