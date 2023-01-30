"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b,2) - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    let x = - (b / 2 * a);

    arr.push(x);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } 
  
  let P = percent/100/12
  console.log('P = ' + P);
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = monthlyPayment * n

  return +totalAmount.toFixed(2);
}