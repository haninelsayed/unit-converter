const inputEl = document.getElementById("container")
const convertBtn = document.getElementById("convert-btn")
const input1 = document.getElementById("user-input")
const input2 = document.getElementById("user-input2")
const input3 = document.getElementById("user-input3")
const input4 = document.getElementById("user-input4")
const input5 = document.getElementById("user-input5")
const input6 = document.getElementById("user-input6")
const feetEl = document.getElementById("feet-result")
const metersEl = document.getElementById("meters-result")
const gallonsEl = document.getElementById("gallons-result")
const litersEl = document.getElementById("liters-result")
const poundsEl = document.getElementById("pounds-result")
const kilosEl = document.getElementById("kilos-result")


convertBtn.addEventListener("click", function() {
  if (inputEl.value != 0) {
    input1.textContent = inputEl.value
    input2.textContent = inputEl.value
    input3.textContent = inputEl.value
    input4.textContent = inputEl.value
    input5.textContent = inputEl.value
    input6.textContent = inputEl.value
    const feetVal = (inputEl.value * 3.281).toFixed(3)
    feetEl.textContent = feetVal
    const metersVal = (inputEl.value / 3.281).toFixed(3)
    metersEl.textContent = metersVal
    const gallonsVal = (inputEl.value * 0.264).toFixed(3)
    gallonsEl.textContent = gallonsVal
    const litersVal = (inputEl.value / 0.264).toFixed(3)
    litersEl.textContent = litersVal
    const poundsVal = (inputEl.value * 2.204).toFixed(3)
    poundsEl.textContent = poundsVal
    const kilosVal = (inputEl.value / 2.204).toFixed(3)
    kilosEl.textContent = kilosVal
  }
  else {
    input1.textContent = 0
    input2.textContent = 0
    input3.textContent = 0
    input4.textContent = 0
    input5.textContent = 0
    input6.textContent = 0
    feetEl.textContent = 0
    metersEl.textContent = 0
    gallonsEl.textContent = 0
    litersEl.textContent = 0
    poundsEl.textContent = 0
    kilosEl.textContent = 0
  }
})