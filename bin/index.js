#!/usr/bin/env node
var program = require('commander')

global.fetch = require('node-fetch')

var cli = require('../build/index.js')

program
.arguments('<command>')
.option('-c, --config <config>', 'App Config folder Name')
.action(function (command) {
  cli.default.run(program, command, process.argv)
}).parse(process.argv)
