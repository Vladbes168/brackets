module.exports = function check(str, bracketsConfig) {
  const result = [];
  const openToClose = new Map();
  const closeToOpen = new Map();

  for (const [open, close] of bracketsConfig) {
    openToClose.set(open, close);
    closeToOpen.set(close, open);
  }
  for (const char of str) {
    if (openToClose.has(char)) {
      if (char === openToClose.get(char) && result.length > 0 && result[result.length - 1] === char) {
        result.pop();
      } else {
        result.push(char);
      }
    } else if (closeToOpen.has(char)) {
      if (result.length === 0 || result[result.length - 1] !== closeToOpen.get(char)) {
        return false;
      }
      result.pop();
    }
  }

  return result.length === 0;
};




// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));

