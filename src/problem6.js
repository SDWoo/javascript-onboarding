// 2차원 배열 입력받음
// 일단 해당 배열들을 하나씩 돌아야됨 for문 하나
// 그 후에 해당 이름을 한번씩 돌아서 반복 여부 저정
// 그리고 해당 배열과 반복 여부가 같은지 판별. 그러면 3중 포문인가 무조건
function problem6(forms) {
  const result = [];
  if (forms.length < 1 || forms.length > 10000) {
    console.log('크루는 1명 이상 10,000명 이하를 입력해주세요.');
    return;
  }

  const words = [];
  const sameList = [];
  forms.forEach((form) => {
    if (form[0].length < 11 || form[0] > 20) return;
    for (let i = 0; i < form[1].length; i++) {
      for (let j = i + 1; j <= form[1].length; j++) {
        const compareString = form[1].slice(i, j);
        if (compareString.length === 1) continue;

        if (words.includes(compareString)) {
          result.push(form[0]);
          if (!sameList.includes(compareString)) sameList.push(compareString);
        } else words.push(compareString);
      }
    }
  });

  sameList.forEach((sameString) => {
    if (forms[0][1].includes(sameString)) {
      result.push(forms[0][0]);
    }
  });
  return result.sort();
}
module.exports = problem6;
