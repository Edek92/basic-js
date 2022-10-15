const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log (arr);
  const NEW = [];
  let result = [];
  if (Array.isArray(arr)) {
    arr.forEach (elem => NEW.push(elem))
    for (let i = 0; i < NEW.length; i++) {
      if (NEW[i] == '--discard-next') {
        NEW[i + 1] = 'empty'
        i++
      } else if (NEW[i] == '--discard-prev') {
        if (result.length > 0) {
          result.pop()
        }
      } else if (NEW[i] == '--double-next') {
        if (NEW[i + 1] && NEW[i + 1] != 'empty') {
          result.push (NEW[i + 1])
        }
      } else if (NEW[i] == '--double-prev') {
        if (result.length > 0 && NEW[i - 1] != 'empty') {
          result.push(result[result.length - 1])
        }
      } else if (NEW[i] == 1337) {
        result.push(NEW[i])
      } else if (NEW[i] != 1337) {
        result.push(NEW[i])
      }
    }
  } else {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  return result;
}

module.exports = {
  transform
};
