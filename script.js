'use strict';

const ROLLBACK = 10
let title = prompt('Как называется ваш проект?')
const screens = prompt('Какие типы экранов нужно разработать?')
const screenPrice = +prompt('Сколько будет стоить данная работа?', '100')
const adaptive = confirm('Нужен ли адаптив на сайте?')
const service1 = prompt('Какой дополнительный тип услуги нужен?')
const servicePrice1 = +prompt('Сколько это будет стоить?', '100')
const service2 = prompt('Какой дополнительный тип услуги нужен?')
const servicePrice2 = +prompt('Сколько это будет стоить?', '100')

const getAllServicePrices = function(servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
}

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)

let fullPrice = function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

const getTitle = function(title) {
    title = title.trim().toLowerCase();
    return title[0].toUpperCase() + title.substring(1);
}

let servicePercentPrice = function getServicePercentPrices(fullPrice, rollBack) {
    return fullPrice - (fullPrice * rollBack / 100)
}

const getRollbackMessage = function(price) {
    switch (true) {
        case price >= 30000:
            price *= 0.9;
            return 'Даем скидку в 10%';
        case 30000 > price && price >= 15000:
            fullPrice *= 0.95;
            return 'Даем скидку в 5%';
        case 15000 > price && price > 0:
            return 'Скидка не предусмотрена';
        default:
            return 'Что то пошло не так';
    }
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getTitle(title));
console.log(servicePercentPrice(fullPrice(screenPrice, allServicePrices), ROLLBACK))
console.log(getRollbackMessage(fullPrice(screenPrice, allServicePrices)))
console.log(screens.split(','))