const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.forEach(element => {
 if (typeof element === 'string') {
   element = element.trim();
   arr.push(element[0].toUpperCase());
 }
       })
    return arr.sort().join('');
};
