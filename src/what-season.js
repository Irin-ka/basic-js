const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (isNaN(date.getTime())) throw Error('Invalid date');

  let month = date.getMonth() +1 ;
  if(month >2 && month<6) return ('spring'); 
  if(month >5 && month<9) return ('summer'); 
  if(month >8 && month<12) return ('fall'); 
  else return ('winter');


};
