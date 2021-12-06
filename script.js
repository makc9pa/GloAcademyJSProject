'use strict';


let title
let screens
let screenPrice
let adaptive
let service1
let service2
let rollBack = 10
let allServicePrices
let fullPrice
let servicePercentPrice

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', '10000')
        if (screenPrice !== null) {
            screenPrice = screenPrice.trim()
        }
    }
    while (!isNumber(screenPrice))
    screenPrice = +screenPrice

    adaptive = confirm('Нужен ли адаптив на сайте?')

}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Повышенная доступность для людей с ограничениями')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Поддержка английского языка')
        }

        sum += (() => {
            let n = prompt('Сколько это будет стоить?')
            while(!isNumber(n)) {
                n = prompt('Сколько это будет стоить?')
            }
            return +n.trim()
        })()

    } 

    return sum
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    title = title.trim().toLowerCase();
    return title[0].toUpperCase() + title.substring(1);
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollBack / 100))
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30000:
            price *= 0.9;
            return 'Даем скидку в 10%';
        case 30000 > price && price >= 15000:
            price *= 0.95;
            return 'Даем скидку в 5%';
        case 15000 > price && price > 0:
            return 'Скидка не предусмотрена';
        default:
            return 'Что то пошло не так';
    }
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(title);
console.log(servicePercentPrice)
console.log(getRollbackMessage(fullPrice))
console.log(screens.split(','))