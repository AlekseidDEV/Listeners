"use strict"

const button = document.querySelector('#btn')
const buttonNone = document.querySelector('#e_btn')
const square = document.querySelector('#square')
const inputColor = document.querySelector('#text')
const inputRange = document.querySelector('#range')
const spanCount = document.querySelector('#range-span')
const circle = document.querySelector('#circle')

buttonNone.style.display = 'none'
inputRange.value = 0

const changeColorSquare = (color) => {
    square.style.background = color
}

const changeSizeCircle = (e) => {
    spanCount.textContent = e.target.value

    circle.style.width = `${e.target.value}%`
    circle.style.height = `${e.target.value}%`
}

inputRange.addEventListener('input', changeSizeCircle)

button.addEventListener('click', (e) => {
    if(inputColor.value === ''){
        console.log('введите значение');
    } else{
        changeColorSquare(inputColor.value)
    }
})








