"use strict";

var makeDB = require('../../Controllers/Connector');

describe('makeDB', function () {
  it('makeDB to be defined', function () {
    expect(makeDB).toBeDefined();
  });
  it('makeDB have method query', function () {
    expect(makeDB.query).toBeDefined();
  });
  it('makeDB have method close', function () {
    expect(makeDB.close).toBeDefined();
  });
  it('should return some result from db and makeDB.close close connection', function _callee() {
    var result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(makeDB.query('SELECT * FROM testJest'));

          case 2:
            result = _context.sent;
            expect(result).toEqual([{
              firstName: "MaxTest",
              id: 1
            }]);
            makeDB.close();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});