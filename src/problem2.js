function problem2(cryptogram) {
  let duplicationCount = 1;
  const regExp = /((.))\2*/g;
  while (duplicationCount > 0) {
    const regCripto = cryptogram.match(regExp);

    if (!regCripto) {
      cryptogram = '';
      break;
    }

    cryptogram = regCripto.filter((char) => char.length === 1).join('');
    duplicationCount = regCripto.filter((char) => char.length > 1).length;
  }

  return cryptogram ? cryptogram : '';
}

console.log(problem2('browoanoommnaon'));
console.log(problem2('zyelleyz'));

module.exports = problem2;
