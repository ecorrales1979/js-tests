module.exports.sum = (a, b) => {
  const number1 = parseInt(a, 10);
  const number2 = parseInt(b, 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Please check your input');
  }

  return number1 + number2;
};

module.exports.subtract = (a, b) => {
  const number1 = parseInt(a, 10);
  const number2 = parseInt(b, 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Please check your input');
  }

  return number1 - number2;
}

module.exports.multiply = (a, b) => {
  const number1 = parseInt(a, 10);
  const number2 = parseInt(b, 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Please check your input');
  }

  return number1 * number2;
}

module.exports.divide = (a, b) => {
  const number1 = parseInt(a, 10);
  const number2 = parseInt(b, 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error('Please check your input');
  }

  return number1 / number2;
}
