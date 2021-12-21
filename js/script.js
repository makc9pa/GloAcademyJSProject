'use strict';

const title = document.getElementsByTagName('h1')[0]
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0]
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const span = document.querySelector('.rollback > .main-controls__range > .range-value')
const totalInputPrice = document.getElementsByClassName('total-input')[0]
const totalInputScreens = document.getElementsByClassName('total-input')[1]
const totalInputPriceAdditional = document.getElementsByClassName('total-input')[2]
const totalInputPriceAll = document.getElementsByClassName('total-input')[3]
const totalInputPriceRollback = document.getElementsByClassName('total-input')[4]
const rollBack = document.querySelector('.rollback > .main-controls__range > input')
let screenTotal = document.querySelectorAll('.screen > .main-controls__select > select > option')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.isNumber()
        appData.getFullPrice()
        appData.getTitle()
        appData.getServicePercentPrices()
        appData.getRollbackMessage()
        appData.logger()
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        } while (appData.isNumber(appData.title))

        for (let i = 0; i < 2; i++) {
            
            let name 
            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (appData.isNumber(name))
            
            let price = 0
            do {
                price = prompt('Сколько будет стоить данная работа?').trim()
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (appData.isNumber(name))

            let price = 0
    
            do {
                price = prompt('Сколько это будет стоить?').trim()
            } while(!appData.isNumber(price))
            let id = i
            appData.services[id] = {name, price}
        }
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce((acc, obj) => {return acc + (+obj.price)}, 0)

        for (let id in appData.services) {
            appData.allServicePrices += +appData.services[id].price
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    }, 
    getTitle: function () {
        appData.title = appData.title.trim().toLowerCase();
        appData.title = appData.title[0].toUpperCase() + appData.title.substring(1);
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100))
    },
    getRollbackMessage: function (price) {
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
    },
    logger: function () {
        console.log(appData.title)
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
        console.log(appData.services)
    }
}

console.log(title)
console.log(handlerBtnStart)
console.log(handlerBtnReset)
console.log(screenBtn)
console.log(otherItemsPercent)
console.log(otherItemsNumber)
console.log(rollBack)
console.log(span)
console.log(totalInputPrice)
console.log(totalInputScreens)
console.log(totalInputPriceAdditional)
console.log(totalInputPriceAll)
console.log(totalInputPriceRollback)
console.log(screenTotal)

// appData.start()