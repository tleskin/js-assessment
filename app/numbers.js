exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    newNum = num.toString(2);
    while (newNum.length != 8)
      { newNum = "0" + newNum }
    return newNum;
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toPrecision(1));
  }
};
