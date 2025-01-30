const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

let convertBtn = document.getElementById("btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

function pluralize(unit, value) {
  return value === 1 ? unit : unit + "s";
}

function convertLength(value) {
  const meters = pluralize("meter", value);
  const feet = pluralize("foot", value);
  return `${value} ${meters} = ${(value * meterToFeet).toFixed(
    3
  )} feet | ${value} feet = ${(value / meterToFeet).toFixed(3)} ${meters}`;
}

function convertVolume(value) {
  const liters = pluralize("liter", value);
  const gallons = pluralize("gallon", value);
  return `${value} ${liters} = ${(value * literToGallon).toFixed(
    3
  )} ${gallons} | ${value} ${gallons} = ${(value / literToGallon).toFixed(
    3
  )} ${liters}`;
}

function convertMass(value) {
  const kilos = pluralize("kilo", value);
  const pounds = pluralize("pound", value);
  return `${value} ${kilos} = ${(value * kilogramToPound).toFixed(
    3
  )} ${pounds} | ${value} ${pounds} = ${(value / kilogramToPound).toFixed(
    3
  )} ${kilos}`;
}

convertBtn.addEventListener("click", function () {
  const inputValue = parseFloat(inputEl.value);

  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please enter a valid number");
    inputEl.value = "";
    return;
  }

  lengthEl.textContent = convertLength(inputValue);
  volumeEl.textContent = convertVolume(inputValue);
  massEl.textContent = convertMass(inputValue);
});

inputEl.addEventListener("focus", function () {
  if (inputEl.value === "0") {
    inputEl.value = "";
  }
});

inputEl.addEventListener("blur", function () {
  if (inputEl.value === "") {
    inputEl.value = "0";
  }
});
