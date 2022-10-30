function problem3(number) {
  let answer = 0;

  for (let i = 1; i < number + 1; i += 1) {
    i.toString()
      .split('')
      .forEach((num) => {
        if (num === '3' || num === '6' || num === '9') answer += 1;
      });
  }

  return answer;
}

module.exports = problem3;
