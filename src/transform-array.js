const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  /*if (!Array.isArray(arr)) throw Error('');
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

  return newArray;*/

  if (!(arr instanceof Array)) {
    throw new Error('argument is not Array');
  }

  let newArray = [];

  for (i = 0; i < arr.length; i++) {

    if (i === 0) {
      if (arr[i] === '--discard-prev' || arr[i] === '--double-prev') {
        continue;
      }
    }

    if (i === arr.length - 1) {
      if (arr[i] === '--double-next' || arr[i] === '--discard-next') {
        continue;
      }
    }

    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (!(arr[i - 2] === '--discard-next')) {
        newArray.pop();
      }
    } else if (arr[i] === '--double-next') {
      newArray.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      if (!(arr[i - 2] === '--discard-next')) {
        newArray.push(arr[i - 1]);
      }
      
    } else {
      newArray.push(arr[i]);
    }


  }

  return newArray;

};
