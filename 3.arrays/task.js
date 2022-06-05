function compareArrays(arr1, arr2) {
  // Ваш код
  const result = arr1.every((value, index) => {
    return ((arr1.length === arr2.length) && (value === arr2[index]));
  });
  
  return result; // boolean
}

function advancedFilter(arr) {
  // Ваш код
  let resultArr = arr.filter((arr) => arr >= 0).filter((arr) => arr % 3 === 0).map((arr) => arr * 10);
  return resultArr; // array
}
