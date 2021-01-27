const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error('');
  let newArray = [];
  let toggle = true;
  arr.forEach(function (item, i) {

    if (item === '--discard-next') { // удаляет следующий элемент
      toggle = false;
    } else if (item === '--discard-prev') { // удаляет предыдущий предыдущий
      newArray.pop();
    } else if (item === '--double-next') { // удваивает следующий элемент 
      if (i < arr.length - 1) {
        newArray.push(arr[i+1]);
      }
    } else if (item === '--double-prev') { // удваивает предыдущий элемент
      if (i > 0) {
        newArray.push(arr[i-1]);
      }
    } else if (toggle) {
      newArray.push(item);
    } else {
      toggle = true;
    }
  });

  return newArray;
};
