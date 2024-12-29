const inputEl = document.getElementById('input')

const convertBtn = document.getElementById('convert-btn')

const lengthEl = document.getElementById('length-converter')
const volumeEl = document.getElementById('volume-converter')
const massEl = document.getElementById('mass-converter')

const alert = document.getElementById('alert')

const gallon =  0.264
const pound =  2.204
const feet =  3.281

let liters = inputEl.value / gallon
let gallons = inputEl.value * gallon

let meters = inputEl.value / feet
let feets = inputEl.value * feet

let kilos = inputEl.value / pound
let pounds = inputEl.value * pound



 convertBtn.addEventListener('click', function(){

let liters = inputEl.value / gallon
let gallons = inputEl.value * gallon

let meters = inputEl.value / feet
let feets = inputEl.value * feet

let kilos = inputEl.value / pound
let pounds = inputEl.value * pound

lengthEl.innerText = `${inputEl.value} meters = ${feets.toFixed(3)} feets | ${inputEl.value} feets = ${meters.toFixed(3)} meters`
volumeEl.innerText = `${inputEl.value} liters = ${gallons.toFixed(3)} gallons | ${inputEl.value} galloons = ${liters.toFixed(3)} liters`
massEl.innerText = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`

 })

