const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  const cat = '^^';
  let count = 0;

  matrix.forEach(element => {
    element.forEach(item => {
      if (item === cat) {
        count++;
      }
    });
  });
if (!count) throw new CustomError('Not implemented');
    return count;
};
