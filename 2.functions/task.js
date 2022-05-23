// Задание 1
function getArrayParams(arr) {
  // Ваш код

  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] <= min) {
      min = arr[i];
    };
  };


  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = arr[0];

  // Ваш код
  for (let i = 1; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  // Ваш кода
  for (let i = 1; i < arrOfArr.length; i += 1) {
    const sumOfArr = func(arrOfArr[i]);
    if (sumOfArr > max) {
      max = sumOfArr;
    }
  }
  console.log(`Сумма: ${max}`);
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] <= min) {
      min = arr[i];
    }
  }

  if (Math.abs(max) > Math.abs(min)) {
    return Math.abs(max) - Math.abs(min);
  }

  return Math.abs(min) - Math.abs(max);
}
