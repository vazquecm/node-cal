'use strict';

// "module.exports" is the object that's actually returned as the result of a "require" call //
module.exports = {
  modifiedYear: modifiedYear
  modifiedMonth: modifiedMonth,
  getDay: getDay,
 }

// zellers code below //
// h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
// q is the day of the month
// m is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)


 // function below is asking "if" the month is less than 3 then return the year minus one month, "else" return year //
 let modifiedYear = function (year, month) {
    if (month < 3){
      return year - 1;
    }
    else {
      return year;
    }
  }

// function for "modifiedMonth" in test.js //
let modifiedMonth = function (month) {
    var modified;

// takes care of the month of January //
      if (month === 1){
         modified = 13;
          {
            return month + 12;
          };
        }

// takes care of the month of February //
        if (month === 2) {
           modified = 14;{

            return month +12;
          }

          else {
            modified = month;
        }

           return modified;
  };

// Allgorithim for getting the correct amount of days in each month, leap and nonleap years //
 // var zellers = function (obj) {
  //  for(var key in obj) {
    //  obj[key] = obj[key] * 1;
  //}
  //  return (obj.q + Math.floor((obj.m + 1)*26/10) + obj.y + Math.floor(obj.y/4) + 6 * Math.floor(obj.y/100) + Math.floor
  //    (obj.y/400)) % 7 + '';
//}
  //  module.exports = zellers;
//};


// function to "getDay", the "var" is an equation that allows for getting the days of each month (28, 29, 30, or 31) and
// putting them into the corresponding month, also takes into account leap and nonleap years //
 let getDay = function (year, month, day) {
    modifiedMonth(month);

    var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) +
             parseInt(year / 400) - 1) % 7;
    return h;

};
