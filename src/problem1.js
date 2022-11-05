function getMaxValue(left, right) {
  const leftPlaces = getPlaces(left);
  const rightPlaces = getPlaces(right);

  const leftMaxValue = getMaxPageValue(leftPlaces);
  const rightMaxValue = getMaxPageValue(rightPlaces);

  return Math.max(leftMaxValue, rightMaxValue);
}

function getPlaces(value) {
  const hundredsPlace = Math.floor(value / 100);
  const tensPlace = Math.floor((value % 100) / 10);
  const onesPlace = value % 10;

  if (hundredsPlace === 0 && tensPlace === 0) return [onesPlace];
  if (hundredsPlace === 0) return [tensPlace, onesPlace];
  return [hundredsPlace, tensPlace, onesPlace];
}

function getMaxPageValue(array) {
  let sum = 0,
    mul = 1;
  array.forEach((value) => {
    sum += value;
    mul *= value;
  });

  return Math.max(sum, mul);
}

function isValid(left, right) {
  return Math.abs(left - right) === 1 ? true : false;
}

function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  if (
    !(
      isValid(pobiLeftPage, pobiRightPage) &&
      isValid(crongLeftPage, crongRightPage)
    )
  )
    return -1;

  const pobiScore = getMaxValue(pobiLeftPage, pobiRightPage);
  const crongScore = getMaxValue(crongLeftPage, crongRightPage);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
