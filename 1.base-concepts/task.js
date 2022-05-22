function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  
  if (a === 0) {
    console.log(arr);
    return arr;
  };
  
  const d = b ** 2 - 4 * a * c;
  console.log(`D = ${d}`);
  
  if (d === 0) {
    arr.push((-b) / (2 * a));
  } else if (d > 0) {
    arr.push(((-b + Math.sqrt(d)) / (2 * a)));
    arr.push(((-b - Math.sqrt(d)) / (2 * a)));
  };
  console.log(arr);
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
