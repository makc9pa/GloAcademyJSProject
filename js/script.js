'use strict';



const title = document.getElementsByTagName('h1')[0]
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0]
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')

const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const totalInputPrice = document.getElementsByClassName('total-input')[0]
const totalInputScreens = document.getElementsByClassName('total-input')[1]
const totalInputPriceAdditional = document.getElementsByClassName('total-input')[2]
const totalInputPriceAll = document.getElementsByClassName('total-input')[3]
const totalInputPriceRollback = document.getElementsByClassName('total-input')[4]

const rollBackInput = document.querySelector('.rollback > .main-controls__range > input')
const rollBackSpan = document.querySelector('.rollback > .main-controls__range > .range-value')

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    fullPriceWithRollback: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    rollBack: 0,
    countScreens: 0,
    isError: false,
    init: function () {
        appData.addTitle()
        handlerBtnStart.addEventListener('click', appData.start)
        screenBtn.addEventListener('click', (e) => {
            e.preventDefault()
            appData.checkValues()
        })
        rollBackInput.addEventListener('input', appData.rollBackChanger)
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        // appData.logger()
        appData.showResult()
    },
    rollBackChanger: function (e) {
        rollBackSpan.textContent = e.target.value
        appData.rollBack = rollBackSpan.textContent
    },
    checkValues: function () {
        appData.isError = false
        let screens = document.querySelectorAll('.screen')
        screens.forEach(screen => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            if (select.options.selectedIndex === 0 || input.value.trim() === '') {
                appData.isError = true
            }
        })
        if (!appData.isError) {
            appData.addScreenBlock() 
        } else {
            alert('Внеси данные по типам и количеству экранов')
        }
    },
    addTitle: function () {
        document.title = title.textContent
    },
    showResult: function () {
        totalInputPrice.value = appData.screenPrice
        totalInputPriceAdditional.value = appData.servicePercentPrice + appData.servicePricesNumber
        totalInputPriceAll.value = appData.fullPrice
        totalInputPriceRollback.value = appData.fullPriceWithRollback
        totalInputScreens.value = appData.countScreens

    },
    addScreens: function () {
        let screens = document.querySelectorAll('.screen')
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({ 
                id: index, 
                name: selectName, 
                count: +input.value,
                price: +select.value * +input.value,
            })
        })
        console.log(appData.screens)
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value  
            }

        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value  
            }

        })
    },
    addScreenBlock: function () {

        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length-1].after(cloneScreen)
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce((acc, obj) => {return acc + (+obj.price)}, 0)

        appData.countScreens = appData.screens.reduce((acc, obj) => {return acc + (+obj.count)}, 0)

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += +appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        appData.fullPriceWithRollback = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100))

    },
    logger: function () {
        console.log(appData.title)
        console.log(appData.fullPrice)
        console.log(appData.servicePercentPrice)
        console.log(appData.screens)
        console.log(appData.services)
    }
}

appData.init()