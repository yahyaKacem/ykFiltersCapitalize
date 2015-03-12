/*jslint maxlen: 100*/
/**
 * @ngdoc filter
 * @name Capitalize Filter
 * @description Capitalizes all the words of a given sentence.
 * @author Yahya Kacem <fuj.tyoli@gmail.com>
 *
 * @param {string} input    The string to be formatted.
 * @param {string} [format] The format to be applied being the options 'all', 'first'.
 *                          If not specified, 'all' is used.
 * @returns {string} Formatted string.
 */
(function (ng) {
  'use strict';
  var capitalizeFilter = function () {
    return function (input, format) {
      var capitalizeWord;
      if (!input) {
        return input;
      }
      format = format || 'all';
      if (format === 'first') {
        // Capitalize the first letter of a sentence
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      }
      capitalizeWord = function capitalizeWordF(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      };
      return input.split(' ').map(capitalizeWord).join(' ');
    };
  };
  ng.module('yk.filters.capitalize', [])
    .filter('capitalize', capitalizeFilter);
}(angular));
