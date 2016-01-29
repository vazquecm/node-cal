#!/usr/bin/env node --harmony_destructuring

'use strict';

const [,, ...args] = process.argv;

console.log('args');
