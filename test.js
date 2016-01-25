#!/usr/bin/env node-harmony

var _ = require("./lodash-guten")
var pd = console.log.bind(console)

pd("mapOwn", _.mapOwn({a: 1}, (value, key, result) => result[key.toUpperCase()] = value))
