const reverseString = (string) => {
  if (string.length > 0) {
    return string.split('').reverse().join('');
  }
  return 'This string is empty';
};

module.exports = reverseString;
