const email = document.getElementById('email-input');
const email_msg = document.getElementById('email-message');
const password = document.getElementById('password-input');
const password_msg = document.getElementById('password-message');
const confirmation = document.getElementById('confirmation-input');
const confirmation_msg = document.getElementById('confirmation-message');

const [maleOption, femaleOption] = document.getElementsByName('sex');

const story = document.getElementById('story');
const subscribtion = document.getElementById('subscribtion'); 
const register_form = document.getElementById('register-form');

const messageForInput = new Map();
messageForInput.set(email, email_msg);
messageForInput.set(password, password_msg);
messageForInput.set(confirmation, confirmation_msg);

function hideMessage(element) {
    const message_elem = messageForInput.get(element);
    message_elem && message_elem.classList.add('hidden');
}

function showMessage(element, message) {
    const message_elem = messageForInput.get(element);
    message_elem && (message_elem.innerText = message) && message_elem.classList.remove('hidden');
}

function makeBorderDefault(element) {
    element.classList.remove('red-border');
    hideMessage(element);
}

function makeBorderRed(element) {
    element.classList.add('red-border');
}

function validateEmail(email) {    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(String(email).toLowerCase());
}

email.addEventListener('input', event => makeBorderDefault(event.target));
password.addEventListener('input', event => makeBorderDefault(event.target));
password.addEventListener('input', () => makeBorderDefault(confirmation));
confirmation.addEventListener('input', event => makeBorderDefault(event.target));

email.addEventListener('invalid', event => {
    const value = event.target.value;
    if(!value || value.trim() === '') {
        makeBorderRed(event.target);
        showMessage(event.target, 'Поле обязательно для заполнения');
    } else if (!validateEmail(value)) {
        makeBorderRed(event.target);
        showMessage(event.target, 'Email введён некорректно');
    } else {
        makeBorderRed(event.target);
        showMessage(event.target, 'Неизвестная ошибка');
    }
    makeBorderRed(event.target);
    event.preventDefault();
})

password.addEventListener('invalid', event => {
    const value = event.target.value;
    if(!value || value.trim() === '') {
        makeBorderRed(event.target);
        showMessage(event.target, 'Поле обязательно для заполнения');
    } else {
        makeBorderRed(event.target);
        showMessage(event.target, 'Неизвестная ошибка');
    }
    makeBorderRed(event.target);
    event.preventDefault();
})

confirmation.addEventListener('invalid', event => {
    const value = event.target.value;
    if(!value || value.trim() === '') {
        makeBorderRed(event.target);
        showMessage(event.target, 'Поле обязательно для заполнения');
    } else {
        makeBorderRed(event.target);
        showMessage(event.target, 'Неизвестная ошибка');
    }
    makeBorderRed(event.target);
    event.preventDefault();
})

function validateAndSubmitForm(event) {
    if (password.value?.length < 8) {
        makeBorderRed(password);
        showMessage(password, 'Пароль должен содержать не менее 8 символов');
    } else if (password.value !== confirmation.value) {
        makeBorderRed(confirmation);
        showMessage(confirmation, 'Пароли не совпадают');
    } else {
        const request = {
            email: email.value,
            password: password.value,
            confirmation: confirmation.value,
            sex: [maleOption, femaleOption].filter(e => e.checked).reduce((accumulator, element) => String(accumulator + element.value), ''),
            story: story.value,
            subscribtion: subscribtion.checked
        };
        console.log(request);
    }
    event.preventDefault();
}

register_form.addEventListener('submit', validateAndSubmitForm);