#!/usr/bin/env node

'use strict';

require('babel-register');
console.log('babeled');
require('./lib.cli');
