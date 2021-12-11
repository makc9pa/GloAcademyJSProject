'use strict';

let secretNumber = Math.round(Math.random() * 10)
let num
let count = 10

const isIntegerNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (num % 1 === 0)
}

const playAgaing = function (confirmStatus) {
    if (!confirmStatus) {
        alert('Игра окончена')
    }
    if (confirmStatus) {
        count = 10
        secretNumber = Math.round(Math.random() * 100)
        inputNumber()
    }
}

function inputNumber () {

    if (count === 0) {
        let confirmStatus = confirm('Попытки закончились, хотите сыграть еще?')  
        playAgaing(confirmStatus)
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
        let confirmStatus = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
        playAgaing(confirmStatus)
        console.log(secretNumber)
    }
}

alert('Угадай загаданное число от 1 до 100')
inputNumber()