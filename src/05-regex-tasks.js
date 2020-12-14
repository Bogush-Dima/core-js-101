/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions            *
 *                                                                                           *
 * You can use the next web site in order to check and build regexps:                        *
 * https://regexr.com                                                                        *
 *                                                                                           *
 ******************************************************************************************* */


function getRegexForGuid() {
  return /^{\d[a-fA-f\d]{7}-[a-fA-f\d]{4}-[a-fA-f\d]{4}-[a-fA-f\d]{4}-\d[a-fA-f\d]{11}}$/;
}


/**
 * Returns the regexp that matches all the strings from first column
 * but of them from the second
 *
 * Match :                 Do not match:
 * -----------             --------------
 *  'pit'                     ' pt'
 *  'spot'                    'Pot'
 *  'spate'                   'peat'
 *  'slap two'                'part'
 *  'respite'
 *
 * NOTE : the regex length should be < 13
 *
 * @return {RegExp}
 *
 */
function getRegexForPitSpot() {
  throw new Error('Not implemented');
}


/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the follwing criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters (+ underscore).
 *
 * @param {number} minLength
 * @return {Regex}
 *
 * @example
 *   let validator = getPasswordValidator(6);
 *   'password'.match(validator)  => false
 *   'Pa55Word'.match(validator)  => true
 *   'PASSw0rd'.match(validator)  => true
 *   'PASSW0RD'.match(validator)  => false
 *   'Pa55'.match(validator) => false
 */
function getPasswordValidator(/* minLength */) {
  throw new Error('Not implemented');
}


module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
