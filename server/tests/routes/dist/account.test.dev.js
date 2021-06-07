"use strict";

var express = require("express");

var account = require("../../routes/account");

var request = require("supertest");

var makeDB = require('../../Controllers/Connector');

var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use("/api/account", account);
describe("account", function () {
  it("expect POST account/registartion with such user exsits", function _callee() {
    var _ref, body;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(request(app).post("/api/account/registration").send({
              email: 'SkripnikMRW@gmail.com',
              password: 'somePassword'
            }));

          case 2:
            _ref = _context.sent;
            body = _ref.body;
            expect(body).toEqual({
              "message": "such user exists"
            });
            makeDB.close();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it("expect POST account/registartion with such user exsits", function _callee2() {
    var _ref2, body;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(request(app).post("/api/account/login").send({
              email: 'SkripnikMRW@gmail.com',
              password: 'somePassword'
            }));

          case 2:
            _ref2 = _context2.sent;
            body = _ref2.body;
            expect(body).toEqual({
              "message": "such user exists"
            });
            makeDB.close();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});