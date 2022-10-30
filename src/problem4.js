function problem4(word) {
  const Alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const map = new Map();
  Alphabet.forEach((v, i) => {
    map.set(v, Alphabet[Alphabet.length - 1 - i]);
  });

  // 정확한 인덱스의 값을 바꾸고 공백 유지를 위해 배열로 바꾼다.
  let array = word.split('');

  array.forEach((v, i) => {
    if (v === ' ') return;
    if (!map.has(v)) {
      array[i] = map.get(v.toUpperCase()).toLowerCase();
      return;
    }
    array[i] = map.get(v);
  });

  return array.join('');
}

// console.log(problem4('I love you'));
module.exports = problem4;
