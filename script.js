'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    rollBack: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    start: function () {
        appData.asking()
        appData.isNumber()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getTitle()
        appData.getServicePercentPrices()
        appData.getRollbackMessage()
        appData.logger()
    },
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', '10000').trim()
        } while (!appData.isNumber(appData.screenPrice))
        
        appData.screenPrice = +appData.screenPrice
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getAllServicePrices: function () {
        let sum = 0
    
        for (let i = 0; i < 2; i++) {
            let price = 0
    
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Повышенная доступность для людей с ограничениями')
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Поддержка английского языка')
            }
    
            do {
                price = prompt('Сколько это будет стоить?').trim()
            } while(!appData.isNumber(price))
    
            sum += +price
        }
        appData.allServicePrices = sum
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
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.getRollbackMessage(appData.fullPrice))
        for (let key in appData) {
            console.log(key, appData[key])
        }
    }
}

appData.start()