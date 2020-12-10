/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */


function parseDataFromRfc2822(value) {
  const parsed = Date.parse(value);
  const res = new Date(parsed);
  return res;
}


function parseDataFromIso8601(value) {
  const parsed = Date.parse(value);
  const res = new Date(parsed);
  return res;
}


function isLeapYear(date) {
  let result = false;
  const year = date.getFullYear();
  const yearStr = year.toString();
  const firstHalf = yearStr.slice(0, 2);
  const lastHalf = yearStr.slice(-2);
  if (firstHalf % 4 === 0 && lastHalf % 4 === 0) {
    result = true;
  }
  return result;
}


function timeSpanToString(startDate, endDate) {
  const startHours = startDate.getHours();
  const startMinutes = startDate.getMinutes();
  const startSeconds = startDate.getSeconds();
  const startMilliseconds = startDate.getMilliseconds();
  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();
  const endSeconds = endDate.getSeconds();
  const endMilliseconds = endDate.getMilliseconds();
  let resultHours = 0;
  let resultMinutes = 0;
  let resultSeconds = 0;
  let resultMilliseconds = 0;
  let strHours;
  let strMinutes;
  let strSeconds;
  let strMilliseconds;
  resultHours = Math.abs(startHours - endHours);
  resultMinutes = Math.abs(startMinutes - endMinutes);
  resultSeconds = Math.abs(startSeconds - endSeconds);
  resultMilliseconds = Math.abs(startMilliseconds - endMilliseconds);
  if (resultHours < 10) {
    strHours = `0${resultHours}`;
  } else {
    strHours = `${resultHours}`;
  }
  if (resultMinutes < 10) {
    strMinutes = `0${resultMinutes}`;
  } else {
    strMinutes = `${resultMinutes}`;
  }
  if (resultSeconds < 10) {
    strSeconds = `0${resultSeconds}`;
  } else {
    strSeconds = `${resultSeconds}`;
  }
  if (resultMilliseconds < 10) {
    strMilliseconds = `00${resultMilliseconds}`;
  } else if (resultMilliseconds < 100) {
    strMilliseconds = `0${resultMilliseconds}`;
  } else {
    strMilliseconds = `${resultMilliseconds}`;
  }
  const result = `${strHours}:${strMinutes}:${strSeconds}.${strMilliseconds}`;
  return result;
}


/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(/* date */) {
  throw new Error('Not implemented');
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
