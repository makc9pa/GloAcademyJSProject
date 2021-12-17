'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    rollBack: 10,
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

appData.start()