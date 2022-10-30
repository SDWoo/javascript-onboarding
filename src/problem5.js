function problem5(money) {
  const wallet = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return wallet.map((v) => {
    const Won = Math.floor(money / v);
    money -= Won * v;
    return Won;
  });
}

problem5(50237);

module.exports = problem5;
