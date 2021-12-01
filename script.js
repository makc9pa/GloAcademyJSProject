'use strict';

const ROLLBACK = 1000;

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '100');
const adaptive = !!prompt('Нужен ли адаптив на сайте?', true);
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?', '100');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?', '100');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

switch (true) {
    case fullPrice >= 30000:
        fullPrice *= 0.9;
        console.log('Даем скидку в 10%');
        break;
    case 30000 > fullPrice && fullPrice >= 15000:
        fullPrice *= 0.95;
        console.log('Даем скидку в 5%');
        break;
    case 15000 > fullPrice && fullPrice > 0:
        console.log('Скидка не предусмотрена');
        break;
    default:
        console.log('Что то пошло не так');
}

const servicePercentPrice = Math.ceil(fullPrice - ROLLBACK);

console.log(servicePercentPrice);
