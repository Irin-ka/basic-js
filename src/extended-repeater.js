const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition;
  if(options.addition === undefined) {
    addition = '';
  } else {
    addition = options.addition + '';
  }
  let strToRepeat = (str === null || str === false) ? str + '' : str.toString(); 
  let additionRepeatedStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);  
  let repeatedStr = `${strToRepeat}${additionRepeatedStr}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
  return repeatedStr;
};
  