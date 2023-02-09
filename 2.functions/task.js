
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i]
  }
  let avg = (sum / arr.length).toFixed(2) - 0;

  let result = {};
  result.min = min;
  result.max = max;
  result.avg = avg;
  
  //console.log(result);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //console.log(sum);
  return sum;
}



function differenceMaxMinWorker(...arr) {
  if (Math.max(...arr) == -Infinity || Math.max(...arr) == Infinity){
    max = 0;
    min = 0;
    //console.log('max и min = 0')
  } else {
    max = Math.max(...arr);
    min = Math.min(...arr);
    //console.log('max = ' + max + ' min = ' + min);
  }
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }

  }    
  //console.log(sumEvenElement - sumOddElement);
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }

  }
  if (countEvenElement === 0) {
    return 0;
  }
  //console.log('sumEvenElement(' + sumEvenElement + ') / countEvenElemen(' + countEvenElement + ') = ' + sumEvenElement / countEvenElement);
  return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  //console.log(arrOfArr);
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }

  }
  //console.log(maxWorkerResult);
  return maxWorkerResult;
}
