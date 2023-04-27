"use strict";
var payRate = 25.0;
var hoursWorked = 46;
var overRate;
var overTime;
var overPay;
var totalGrossPay;

if (hoursWorked == 40) {
  var grossPay = hoursWorked * payRate;
  console.log(grossPay);
} else if (hoursWorked > 40) {
  var overRate = payRate * 1.5;
  console.log(overRate);
} else {
 var overTime = hoursWorked - 40;
 var overPay = overTime * overRate;
 var totalGrossPay = grossPay + overPay;
  
 
}
