'use strict';

const ROLLBACK = 1000;
let fullPrice = 0;
let servicePercentPrice = 0;

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '100');
let adaptive = !!prompt('Нужен ли адаптив на сайте?', true);
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?', '100');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?', '100');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

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

servicePercentPrice = Math.ceil(fullPrice - ROLLBACK);

console.log(servicePercentPrice);
