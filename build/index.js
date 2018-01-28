'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _path2.default.resolve('.');

var run = function run(program, command, argv) {
  console.log(_chalk2.default.white.bold('\nReactship is Shipping! 🔥\n'));
  console.log('CONFIG', program.config);
  console.log('ARGV', argv);
  console.log('CMD', command);
  switch (command) {
    case 'foo':
      foo(program.config);
      break;
  }
};

function foo(c) {
  console.log('FOO:', c);
}

exports.default = { run: run };