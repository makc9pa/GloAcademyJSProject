'use strict';

let secretNumber = Math.round(Math.random() * 10)
let num
let count = 10
let confirmStatus

const isIntegerNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (num % 1 === 0)
}

function inputNumber () {

    if (count === 0) {
        confirmStatus = confirm('Попытки закончились, хотите сыграть еще?')
    }

    if (confirmStatus) {
        count = 10
        secretNumber = Math.round(Math.random() * 100)
        inputNumber()
    }

    if (!confirmStatus) {
        alert('Игра окончена')
    }

    num = prompt('Введи число')

    if (num === null) {
        alert('Игра окончена')
    } 

    num = num.trim()
    !isIntegerNumber(num) ? inputNumber() : num = +num

    if (num > secretNumber) {
        count--
        alert(`Загаданное число меньше, осталось попыток: ${count}`)
        inputNumber()
    } 

    if (num < secretNumber) {
        count--
        alert(`Загаданное число больше, осталось попыток: ${count}`)
        inputNumber() 
    } 

    if (num === secretNumber) {
        confirmStatus = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
        console.log(secretNumber)
    }

    if (confirmStatus) {
        count = 10
        secretNumber = Math.round(Math.random() * 100)
        inputNumber()
    }

    if (!confirmStatus) {
        alert('Игра окончена')
    }

}

alert('Угадай загаданное число от 1 до 100')
inputNumber()