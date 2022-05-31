function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    result = arr1.every((index) => {
      if (arr1[index] === arr2[index]) {
        return true;
      }
      return false;
    });
  } else {
    return false;
  }
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  // Ваш код
  let resultArr = arr.filter((arr) => arr >= 0).filter((arr) => arr % 3 === 0).map((arr) => arr * 10);
  return resultArr; // array
}
