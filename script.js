'use strict'

const inputText = document.getElementById('text')
const btn = document.getElementById('btn')
const square = document.getElementById('square')
const eBtn = document.getElementById('e_btn')
const range = document.getElementById('range')
const circle = document.getElementById('circle')
const span = document.getElementById('range-span')

const colorChanger = function (event) {
    square.style.backgroundColor = inputText.value
}

const volumeChanger = function (event) {
    span.textContent = event.target.value
    circle.style.height = span.textContent + '%'
    circle.style.width = span.textContent + '%'
}

btn.addEventListener('click', colorChanger)
range.addEventListener('input', volumeChanger)

eBtn.style.display = 'none'