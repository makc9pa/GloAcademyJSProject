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
        this.addTitle();
        handlerBtnStart.addEventListener('click', this.start.bind(appData));
        screenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.checkValues.apply(appData);
        })
        rollBackInput.addEventListener('input', this.rollBackChanger.bind(appData));
        handlerBtnReset.addEventListener('click', this.reset.bind(appData));
    },
    start: function () {
        this.addScreens.apply(appData)
        this.addServices.apply(appData)
        this.addPrices.apply(appData)
        // appData.logger.bind(appData)
        this.showResult.apply(appData)
    },
    reset: function () {
        this.resetScreens.apply(appData)
        this.resetBtn.apply(appData)
        this.resetRollBack.apply(appData)
        this.resetServices.apply(appData)
        this.resetTotalInputs.apply(appData)
    },
    resetTotalInputs: function () {
        totalInputPrice.value = 0
        totalInputPriceAdditional.value = 0
        totalInputPriceAll.value = 0
        totalInputPriceRollback.value = 0
        totalInputScreens.value = 0
        this.servicesPercent = {}
        this.servicesNumber = {}
        this.screenPrice = 0
        this.fullPrice = 0
        this.fullPriceWithRollback = 0
        this.countScreens = 0
        this.servicePricesNumber = 0
        this.servicePricesPercent  = 0

    },
    resetScreens: function () {
        let screens = document.querySelectorAll('.screen')
        console.log(screens)
        screens.forEach((item, index) => {
            const select = item.querySelector('select')
            const input = item.querySelector('input')
            if (index >= 1) {
                screens[index].remove()
            }
            input.value = ''
            input.disabled = false
            select.value = ''
            select.disabled = false
        })
        this.screens = []
        console.log(screens)
    },
    resetBtn: function () {
        handlerBtnStart.style = "display"
        handlerBtnReset.style = "display: none"
        screenBtn.disabled = false

    },
    resetRollBack: function () {
        rollBackInput.disabled = false
        rollBackInput.value = 0
        rollBackSpan.textContent = 0
    },
    resetServices: function () {
        otherItemsPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            if (check.checked) {
                check.checked = !check.checked 
            }
            check.disabled = false
        })

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            if (check.checked) {
                check.checked = !check.checked 
            }
            check.disabled = false
        })
    },
    rollBackChanger: function (e) {
        rollBackSpan.textContent = e.target.value
        this.rollBack = rollBackSpan.textContent
    },
    checkValues: function () {
        this.isError = false
        screens = document.querySelectorAll('.screen')
        screens.forEach(screen => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            if (select.value === '' || input.value.trim() === '') {
                this.isError = true
            }
        })
        if (!this.isError) {
            this.addScreenBlock() 
        } else {
            alert('Внеси данные по типам и количеству экранов')
        }
    },
    addTitle: function () {
        document.title = title.textContent
    },
    showResult: function () {
        totalInputPrice.value = this.screenPrice
        totalInputPriceAdditional.value = this.servicePercentPrice + this.servicePricesNumber
        totalInputPriceAll.value = this.fullPrice
        totalInputPriceRollback.value = this.fullPriceWithRollback
        totalInputScreens.value = this.countScreens
        handlerBtnStart.style = "display: none"
        handlerBtnReset.style = "display"
        screenBtn.disabled = true
        screens.disabled = true
        rollBackInput.disabled = true
    },
    addScreens: function () {
        let screens = document.querySelectorAll('.screen')
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({ 
                id: index, 
                name: selectName, 
                count: +input.value,
                price: +select.value * +input.value,
            })
            select.disabled = true
            input.disabled = true
        })
    },
    addServices: function () {
        otherItemsPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value  
            }
            check.disabled = true
            input.disabled = true
        })

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value  
            }
            check.disabled = true
            input.disabled = true
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        cloneScreen.querySelector('input').value = '';
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        this.screenPrice = this.screens.reduce((acc, obj) => {return acc + (+obj.price)}, 0)

        this.countScreens = this.screens.reduce((acc, obj) => {return acc + (+obj.count)}, 0)

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += +this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
        this.fullPriceWithRollback = this.fullPrice + (this.fullPrice * (this.rollBack / 100))

    },
    logger: function () {
        console.log(this.title)
        console.log(this.fullPrice)
        console.log(this.servicePercentPrice)
        console.log(this.screens)
        console.log(this.services)
    }
}

appData.init()