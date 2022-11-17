'use strict'

const first_number = document.getElementById('first_number');
const second_number = document.getElementById('second_number');
const calc_operation = document.getElementById('calc_operation');
const button_calc = document.getElementsByClassName('buttons__operate')[0];
const console_output = document.getElementById('console_output');

button_calc.addEventListener('click', () => {
    if (first_number === undefined || first_number === null || first_number.value === '') {
        errorOut('Первое число не указано!');
        return;
    } else if (second_number === undefined || second_number === null || second_number.value === '') {
        errorOut('Второе число не указано!');
        return;
    }

    const first = Number(first_number.value);
    const second = Number(second_number.value);

    if (isNaN(first) || isNaN(second)) {
        errorOut('Некорректный ввод чисел!');
        return;
    }

    const operation = calc_operation.value.trim();
    if (operation === undefined || operation === null || operation === '') {
        errorOut('Не введён знак!');
        return;
    }

    let result;

    switch (operation) {
        case '+': {
            result = first + second;
            logOut(result);
        } break;
        case '-': {
            result = first - second;
            logOut(result);
        } break;
        case '*': {
            result = first * second;
            logOut(result);
        } break;
        case '/': {
            if (second == 0) {
                errorOut('Операция некорректна!');
                return;
            } else {
                result = first / second;
                logOut(result);
            }
        } break;
        default: {
            errorOut('Программа не поддерживает такую операцию!');
            return;
        }
    }
})

function logOut(text) {
    console_output.value = console_output.value.substring(console_output.value.indexOf('>') + 1);
    console_output.value = '>' + text + '\n' + console_output.value;
    console.log(text);
}

function errorOut(text) {
    console_output.value = console_output.value.substring(console_output.value.indexOf('>') + 1);
    console_output.value = '>' + text + '\n' + console_output.value;
    console.error(text);
}