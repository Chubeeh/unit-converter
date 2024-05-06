const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMeter = 0.305
const literToGallon =  0.264
const gallonToLiter = 3.785
const kiloToPound =  2.204
const poundToKilo = 0.453

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value

    lengthEl.textContent = 
    `${baseValue}meters = ${(baseValue * meterToFeet).toFixed(3)}feet || ${baseValue}feet = ${(baseValue * feetToMeter).toFixed(3)}meters`
    volumeEl.textContent = 
    `${baseValue}liters = ${(baseValue * literToGallon).toFixed(3)}gallons || ${baseValue}gallons = ${(baseValue * gallonToLiter).toFixed(3)}liters`
    massEl.textContent = 
    `${baseValue}kilos = ${(baseValue * kiloToPound).toFixed(3)}pounds || ${baseValue}pounds = ${(baseValue * poundToKilo).toFixed(3)}kilos`
})

resetBtn.addEventListener("click", function(){
    inputEl.value = ""
    window.location.reload()
})