'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('test suite', () => {
  describe('CLI', () => {
   it('true should handle the current month', () => {
    const goal = cp.execSync('cal').toString();
    const output = cp.execSync('./cal.js');

    expect(output).to.equal(goal);
  });
});

describe("Zellar's congruence", () => {
  describe('.modifiedMonth', () => {
    it('return 13 for January', () => {
     const mod = zellars.modifiedMonth(2012, 01)
    });
    // 2012, 2 ===14
    // 2012, 3 === 3
    });
    // .modified Year
    // 2000, 1 === 1999
    // 2012, 2 === 2011
    //
