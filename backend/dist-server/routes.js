"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _login = _interopRequireDefault(require("./controllers/login.controller"));

var _logout = _interopRequireDefault(require("./controllers/logout.controller"));

var router = (0, _express.Router)();
router.use("/auth", [_login["default"], _logout["default"]]);
var _default = router;
exports["default"] = _default;