// conversion.js

// Convierte dólares a yenes japoneses
function fromDollarToYen(dollar) {
  return dollar * 127.9;
}

// Convierte euros a dólares estadounidenses
function fromEuroToDollar(euro) {
  return euro * 1.2;
}

// Convierte yenes japoneses a libras esterlinas
function fromYanToPound(yen) {
  return yen * 0.8;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };