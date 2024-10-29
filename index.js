const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

let convertBtn = document.getElementById("btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

function convertLength(value) {
  return `${value} meters = ${(value * meterToFeet).toFixed(
    3
  )} feet | ${value} feet = ${(value / meterToFeet).toFixed(3)} meters`;
}

function convertVolume(value) {
  return `${value} liters = ${(value * literToGallon).toFixed(
    3
  )} gallons | ${value} gallons = ${(value / literToGallon).toFixed(3)} liters`;
}

function convertMass(value) {
  return `${value} kilos = ${(value * kilogramToPound).toFixed(
    3
  )} pounds | ${value} pounds = ${(value / kilogramToPound).toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", function () {
  const inputValue = parseFloat(inputEl.value);

  if (isNaN(inputValue) || inputValue <= 0) {
    lengthEl.textContent = "Please enter a valid number.";
    volumeEl.textContent = "";
    massEl.textContent = "";
    return;
  }

  lengthEl.textContent = convertLength(inputValue);
  volumeEl.textContent = convertVolume(inputValue);
  massEl.textContent = convertMass(inputValue);
});
