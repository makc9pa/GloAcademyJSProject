'use strict';

let secretNumber = Math.round(Math.random() * 100)

const isIntegerNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (num % 1 === 0)
}

function inputNumber () {
    let num = prompt('Введи число')
    if (num === null) {
        alert('Игра окончена')
    } else {
        num = num.trim()
        !isIntegerNumber(num) ? inputNumber() : num = +num
        if (num > secretNumber) {
            alert('Загаданное число меньше')
            inputNumber()
        } else if (num < secretNumber) {
            alert('Загаданное число больше')
            inputNumber() 
        } else {
            alert('Поздравляю, Вы угадали!!!')
            console.log(num)
        }
    }
}

alert('Угадай загаданное число от 1 до 100')
inputNumber()

console.log(secretNumber)