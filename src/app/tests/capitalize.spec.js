/*jslint maxlen: 115*/
(function (it, expect, describe, beforeEach) {
  'use strict';
  describe('Filter: capitalize', function () {
    // load the filter's module
    beforeEach(module('yk.filters.capitalize'));
    // initialize a new instance of the filter before each test
    var capitalize;
    beforeEach(inject(function ($filter) {
      capitalize = $filter('capitalize');
    }));
    describe('Format: all', function () {
      it('should return the uppercase input with all the words capitalized', function () {
        var text = 'CLUB DEPORTIVO LOGROÑÉS';
        expect(capitalize(text)).toBe('Club Deportivo Logroñés');
      });
      it('should return the lowercase input with all the words capitalized', function () {
        var text = 'la tierra con nombre de vino';
        expect(capitalize(text)).toBe('La Tierra Con Nombre De Vino');
      });
      it('should handle mixed lowercase and uppercase input and return all the words capitalized', function () {
        var text = 'la TIerra CON Nombre De vInO';
        expect(capitalize(text)).toBe('La Tierra Con Nombre De Vino');
      });
    });
    describe('Format: first', function () {
      it('should return the uppercase input with the first word capitalized', function () {
        var text = 'LIFE IS TOO SHORT FOR MANUAL TESTING.';
        expect(capitalize(text, 'first')).toBe('Life is too short for manual testing.');
      });
      it('should return the lowercase input with the first word capitalized', function () {
        var text = 'a code that cannot be tested is flawed.';
        expect(capitalize(text, 'first')).toBe('A code that cannot be tested is flawed.');
      });
      it('should handle mixed lowercase and uppercase input and return the first word capitalized', function () {
        var text = 'la TIerra CON Nombre De vInO';
        expect(capitalize(text, 'first')).toBe('La tierra con nombre de vino');
      });
    });
  });
}(it, expect, describe, beforeEach));
