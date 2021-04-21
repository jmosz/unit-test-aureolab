/*
    Ejemplo de pruebas Unitarias
    Aureolab 2021
*/

var Calculator = require('./lib/calculator.js');
console.log("Bienvenido a mi calculadora");
console.log("2+2 == " + Calculator.add(2,2) );
console.log("10-2 == " + Calculator.rest(10,2));
console.log("10-2 == " + Calculator.badFunction(10,2));

