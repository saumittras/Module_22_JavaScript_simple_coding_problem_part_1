/**
 *
 * year will be a leap year if the year is divisible by 4
 */

function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function leapYear2(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYear2(2100));
