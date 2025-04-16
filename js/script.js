// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html


"use strict"


/**
* This function calculates Fahrenheit into Celsius.
*/
function calculateFahrenheitToCelsius () {
 // input
 const fahrenheit  = parseFloat(document.getElementById('fahrenheit').value)
 const quantification = 32

 // process
 const celsius = (fahrenheit - quantification) * 5/9.


 // output
 document.getElementById('celsius').innerHTML = 'celsius is: ' + celsius.toFixed(2) + ' °'
}